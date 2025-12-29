using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HospitalManagementSystem.API.Models.Enums;

namespace HospitalManagementSystem.API.Models.Entities
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }

        [Required, MaxLength(100)]
        public string? FullName { get; set; }

        [Required, MaxLength(255)]
        public string? Email { get; set; }

        [Required, MaxLength(255)]
        public string? Password{ get; set; }

        [Required]
        public UserRole Role { get; set; }

        [Required]
        public AccountStatus Status { get; set; } = AccountStatus.Pending;

        [MaxLength(20)]
        public string? Gender { get; set; }

        public DateTime? DateOfBirth { get; set; }

        [MaxLength(20)]
        public string? PhoneNumber { get; set; }

        [MaxLength(100)]
        public string? Specialization { get; set; }

        [MaxLength(100)]
        public string? Qualification { get; set; }

        public int? ExperienceYears { get; set; }

        [MaxLength(100)]
        public string? Department { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime? UpdatedAt { get; set; }

        // Navigation
        public Doctor? DoctorProfile { get; set; }
        public Staff? StaffProfile { get; set; }
        public ICollection<Appointment>? PatientAppointments { get; set; }
        public Doctor? Doctor { get; set; }
        public Staff? Staff { get; set; }
        

    }
}
