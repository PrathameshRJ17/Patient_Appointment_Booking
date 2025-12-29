// HospitalManagementSystem.API/DTOs/UserDtos.cs
using HospitalManagementSystem.API.Models.Enums;

namespace HospitalManagementSystem.API.DTOs
{
    public class UserRegisterDto
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string? Gender { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string? PhoneNumber { get; set; }
        public UserRole Role { get; set; }
        public string? Specialization { get; set; }
        public string? Qualification { get; set; }
        public int? ExperienceYears { get; set; }
        public string? Department { get; set; }
    }

    public class UserLoginDto
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class UserResponseDto
    {
        public int UserId { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public UserRole Role { get; set; }
        public AccountStatus Status { get; set; }
        public string? Gender { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string? PhoneNumber { get; set; }
        public int? DoctorId { get; set; }
        public int? StaffId { get; set; }
        public DateTime CreatedAt { get; set; }

    }

    public class UpdateUserDto
    {
        public string? FullName { get; set; }
        public string? Email { get; set; }
        public string? Gender { get; set; }
        public string? PhoneNumber { get; set; }
    }

    public class ApproveUserDto
    {
        public int UserId { get; set; }
        public AccountStatus Status { get; set; }
        public string? ShiftTiming { get; set; }
        public string? Specialization { get; set; }
        public string? Qualification { get; set; }
        public int? ExperienceYears { get; set; }
        public decimal? ConsultationFee { get; set; }
        public string? Department { get; set; }
    }
}