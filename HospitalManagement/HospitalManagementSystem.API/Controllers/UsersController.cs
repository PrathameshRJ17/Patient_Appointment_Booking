using HospitalManagementSystem.API.DTOs;
using HospitalManagementSystem.API.Services.Interfaces;
using HospitalManagementSystem.API.Models.Enums;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace HospitalManagementSystem.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize] // require authentication by default
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IConfiguration _configuration;

        public UsersController(IUserService userService, IConfiguration configuration)
        {
            _userService = userService;
            _configuration = configuration;
        }

        [AllowAnonymous]
        [HttpPost("register/patient")]
        public async Task<IActionResult> RegisterPatient([FromBody] UserRegisterDto dto)
        {
            try
            {
                
                dto.Role = UserRole.Patient;
                var user = await _userService.RegisterUserAsync(dto);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [AllowAnonymous]
        [HttpPost("register/professional")]
        public async Task<IActionResult> RegisterProfessional([FromBody] UserRegisterDto dto)
        {
            try
            {
                
                if (dto.Role != UserRole.Doctor && dto.Role != UserRole.Staff)
                    return BadRequest(new { message = "Role must be Doctor or Staff." });

                
                var created = await _userService.RegisterUserAsync(dto);
                
                return Ok(created);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }


        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login(UserLoginDto dto)
        {
            Console.WriteLine($"\n[LOGIN] Attempt: {dto.Email}");
            var user = await _userService.LoginAsync(dto);
            if (user == null)
            {
                Console.WriteLine($"[LOGIN] Failed: Invalid credentials");
                return Unauthorized("Invalid email or password.");
            }

            Console.WriteLine($"[LOGIN] User found: ID={user.UserId}, Role={user.Role}, Status={user.Status}");
            
            
            if (user.Role != UserRole.Admin && user.Status != AccountStatus.Approved)
            {
                Console.WriteLine($"[LOGIN] Rejected: Account not approved");
                return StatusCode(403, "Account not approved.");
            }

            var jwtSection = _configuration.GetSection("Jwt");
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSection["Key"]!));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>
    {
        new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString()),
        new Claim(ClaimTypes.Email, user.Email),
        new Claim(ClaimTypes.Role, user.Role.ToString())   
    };

            if (user.Role == UserRole.Patient)
{
    claims.Add(new Claim(ClaimTypes.Role, "Patient"));
    claims.Add(new Claim("userId", user.UserId.ToString()));
}


            
            if (user.Role == UserRole.Staff && user.StaffId.HasValue)
                claims.Add(new Claim("staffId", user.StaffId.Value.ToString()));

            
            int? responseDoctorId = null;
            if (user.Role == UserRole.Doctor)
            {
                var doctorId = user.DoctorId ?? user.UserId;   
                claims.Add(new Claim("doctorId", doctorId.ToString()));
                responseDoctorId = doctorId;
            }

            var token = new JwtSecurityToken(
                issuer: jwtSection["Issuer"],
                audience: jwtSection["Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddHours(2),
                signingCredentials: creds
            );

            var response = new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token),
                role = user.Role.ToString(),
                userId = user.UserId,
                staffId = user.StaffId,
                doctorId = responseDoctorId
            };
            
            Console.WriteLine($"[LOGIN] Success: Returning token for user {user.UserId}, role={user.Role}");
            return Ok(response);
        }


        [Authorize(Roles = "Admin")]
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] string? role)
        {
            var users = await _userService.GetAllUsersAsync();
            if (!string.IsNullOrEmpty(role))
            {
                users = users.Where(u => u.Role.ToString().Equals(role, StringComparison.OrdinalIgnoreCase));
            }
            return Ok(users);
        }

        
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var user = await _userService.GetUserByIdAsync(id);
            if (user == null)
                return NotFound();
            return Ok(user);
        }

        
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, UpdateUserDto dto)
        {
            try
            {
                Console.WriteLine($"[UPDATE CONTROLLER] Received update request for user {id}");
                var updatedUser = await _userService.UpdateUserAsync(id, dto);
                if (updatedUser == null)
                {
                    Console.WriteLine($"[UPDATE CONTROLLER] User not found");
                    return NotFound(new { message = "User not found" });
                }
                Console.WriteLine($"[UPDATE CONTROLLER] Update successful");
                return Ok(updatedUser);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[UPDATE CONTROLLER] Error: {ex.Message}");
                return BadRequest(new { message = ex.Message });
            }
        }

        // 
        [Authorize(Roles = "Admin")]
        [HttpPut("approve")]
        public async Task<IActionResult> Approve(ApproveUserDto dto)
        {
            var user = await _userService.ApproveUserAsync(dto);
            if (user == null)
                return NotFound();
            return Ok(user);
        }

        
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var user = await _userService.GetUserByIdAsync(id);
            var result = await _userService.DeleteUserAsync(id);
            if (!result)
                return NotFound();
            
            var roleMessage = user?.Role.ToString() ?? "User";
            return Ok($"{roleMessage} deleted successfully.");
        }

    }
}
