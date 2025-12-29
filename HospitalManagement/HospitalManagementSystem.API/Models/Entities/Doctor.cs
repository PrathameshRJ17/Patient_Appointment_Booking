using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HospitalManagementSystem.API.Models.Entities
{
    public class Doctor
    {
        [Key, ForeignKey("User")]
        public int DoctorId { get; set; }

        [Required, MaxLength(100)]
        public string? Specialization { get; set; }

        [Required]
        public int ExperienceYears { get; set; }

        [Required, MaxLength(100)]
        public string? Qualification { get; set; }

        [Required, Column(TypeName = "decimal(10,2)")]
        public decimal ConsultationFee { get; set; }

        [MaxLength(50)]
        public string AvailabilityStatus { get; set; } = "Available";

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Navigation
        public User User { get; set; }
        public ICollection<Appointment>? Appointments { get; set; }
    }
}
