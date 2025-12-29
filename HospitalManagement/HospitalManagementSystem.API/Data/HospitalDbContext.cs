using Microsoft.EntityFrameworkCore;
using HospitalManagementSystem.API.Models.Entities;

namespace HospitalManagementSystem.API.Data
{
    public class HospitalDbContext : DbContext
    {
        public HospitalDbContext(DbContextOptions<HospitalDbContext> options) : base(options)
        {
        }

        // DbSets — represent tables
        public DbSet<User> Users { get; set; }
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Staff> Staffs { get; set; }
        public DbSet<Appointment> Appointments { get; set; }
        public DbSet<Bill> Bills { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // 🧍 USER
            modelBuilder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();

            // 👨‍⚕️ DOCTOR - one-to-one with USER
            modelBuilder.Entity<Doctor>()
                .HasOne(d => d.User)
                .WithOne(u => u.DoctorProfile)
                .HasForeignKey<Doctor>(d => d.DoctorId)
                .OnDelete(DeleteBehavior.Cascade);

            // 🧑‍⚕️ STAFF - one-to-one with USER
            modelBuilder.Entity<Staff>()
                .HasOne(s => s.User)
                .WithOne(u => u.StaffProfile)
                .HasForeignKey<Staff>(s => s.StaffId)
                .OnDelete(DeleteBehavior.Cascade);

            // 📅 APPOINTMENT - many-to-one: Patient(User)
            modelBuilder.Entity<Appointment>()
                .HasOne(a => a.Patient)
                .WithMany(u => u.PatientAppointments)
                .HasForeignKey(a => a.PatientId)
                .OnDelete(DeleteBehavior.Restrict);

            // 📅 APPOINTMENT - many-to-one: Doctor
            modelBuilder.Entity<Appointment>()
                .HasOne(a => a.Doctor)
                .WithMany(d => d.Appointments)
                .HasForeignKey(a => a.DoctorId)
                .OnDelete(DeleteBehavior.Restrict);

            // 📅 APPOINTMENT - optional many-to-one: Staff
            modelBuilder.Entity<Appointment>()
                .HasOne(a => a.Staff)
                .WithMany(s => s.HandledAppointments)
                .HasForeignKey(a => a.StaffId)
                .OnDelete(DeleteBehavior.SetNull);

            // 💳 BILL - one-to-one with Appointment
            modelBuilder.Entity<Bill>()
                .HasOne(b => b.Appointment)
                .WithOne(a => a.Bill)
                .HasForeignKey<Bill>(b => b.AppointmentId)
                .OnDelete(DeleteBehavior.Cascade);

            // 💳 BILL - many-to-one: Patient(User)
            modelBuilder.Entity<Bill>()
                .HasOne(b => b.Patient)
                .WithMany()
                .HasForeignKey(b => b.PatientId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
