// HospitalManagementSystem.API/Program.cs
using HospitalManagementSystem.API.Data;
using HospitalManagementSystem.API.Repositories.Interfaces;
using HospitalManagementSystem.API.Repositories.Implementations;
using HospitalManagementSystem.API.Services.Interfaces;
using HospitalManagementSystem.API.Services.Implementations;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;

using QuestPDF;
using QuestPDF.Infrastructure;

QuestPDF.Settings.License = LicenseType.Community;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});





// 🧱 Database Configuration
builder.Services.AddDbContext<HospitalDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"),
        sqlOptions => sqlOptions.EnableRetryOnFailure()));

// 🧩 Repository Registrations
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IStaffRepository, StaffRepository>();
builder.Services.AddScoped<IDoctorRepository, DoctorRepository>();
builder.Services.AddScoped<IAppointmentRepository, AppointmentRepository>();
builder.Services.AddScoped<IBillRepository, BillRepository>();

// ⚙️ Service Registrations
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IStaffService, StaffService>();
builder.Services.AddScoped<IDoctorService, DoctorService>();
builder.Services.AddScoped<IAppointmentService, AppointmentService>();
builder.Services.AddScoped<IBillService, BillService>();
builder.Services.AddScoped<IAdminService, AdminService>(); // <-- added registration

// 🚀 Add Controllers
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
    options.JsonSerializerOptions.DictionaryKeyPolicy = JsonNamingPolicy.CamelCase;
    options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
    options.JsonSerializerOptions.DefaultIgnoreCondition = System.Text.Json.Serialization.JsonIgnoreCondition.WhenWritingNull;
});

// ---------- JWT Authentication Registration ----------
var jwtSection = builder.Configuration.GetSection("Jwt");
var jwtKey = jwtSection["Key"];
if (string.IsNullOrWhiteSpace(jwtKey))
{
    throw new InvalidOperationException("Jwt:Key is not configured in configuration (appsettings).");
}

var jwtIssuer = jwtSection["Issuer"] ?? "HospitalApi";
var jwtAudience = jwtSection["Audience"] ?? "HospitalApiClients";

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false;
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidIssuer = jwtIssuer,
        ValidateAudience = true,
        ValidAudience = jwtAudience,
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey)),
        ValidateLifetime = true,
        ClockSkew = TimeSpan.FromMinutes(2)
    };
});
// ---------------------------------------------------

//  Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Hospital Management System API",
        Version = "v1",
        Description = "Backend API for managing users, doctors, staff, appointments, and billing in a hospital management system."
    });

    // Add JWT Authorization to swagger UI
    options.AddSecurityDefinition("Bearer", new Microsoft.OpenApi.Models.OpenApiSecurityScheme
    {
        Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
        Name = "Authorization",
        In = Microsoft.OpenApi.Models.ParameterLocation.Header,
        Type = Microsoft.OpenApi.Models.SecuritySchemeType.Http,
        Scheme = "bearer",
        BearerFormat = "JWT"
    });
    options.AddSecurityRequirement(new Microsoft.OpenApi.Models.OpenApiSecurityRequirement {
        {
            new Microsoft.OpenApi.Models.OpenApiSecurityScheme {
                Reference = new Microsoft.OpenApi.Models.OpenApiReference {
                    Type = Microsoft.OpenApi.Models.ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            Array.Empty<string>()
        }
    });
});

var app = builder.Build();

// 🧭 HTTP Pipeline
// Enable Swagger in all environments
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Hospital Management System API v1");
    c.RoutePrefix = string.Empty; // Swagger opens at root
});


app.UseCors("AllowAngularApp");
// Authentication must come before Authorization
app.UseAuthentication();

// endpoints are protected
app.UseAuthorization();


app.MapControllers();

// Insert before app.Run();
try
{
    using (var scope = app.Services.CreateScope())
    {
        var db = scope.ServiceProvider.GetRequiredService<HospitalDbContext>();
        
        // Ensure database is created
        db.Database.EnsureCreated();
        
        if (!db.Users.Any(u => u.Role == HospitalManagementSystem.API.Models.Enums.UserRole.Admin))
        {
            db.Users.Add(new HospitalManagementSystem.API.Models.Entities.User
            {
                FullName = "Initial Admin",
                Email = "admin@local",
                Password = "ChangeMe123456", 
                Role = HospitalManagementSystem.API.Models.Enums.UserRole.Admin,
                Status = HospitalManagementSystem.API.Models.Enums.AccountStatus.Approved,
                CreatedAt = DateTime.UtcNow
            });
            db.SaveChanges();
        }
    }
}
catch (Exception ex)
{
    // Log error but don't crash the application
    Console.WriteLine($"Database initialization error: {ex.Message}");
}

app.Run();