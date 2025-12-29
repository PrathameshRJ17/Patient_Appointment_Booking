using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HospitalManagementSystem.API.Models.Enums;

namespace HospitalManagementSystem.API.Models.Entities
{
    public class Appointment
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AppointmentId { get; set; }

        [Required]
        public int PatientId { get; set; }

        [Required]
        public int DoctorId { get; set; }

        public int? StaffId { get; set; }

        [Required]
        public DateTime AppointmentDate { get; set; }
        [Required, MaxLength(11)]
        public TimeSpan SlotTime { get; set; }

        [Required]
        public AppointmentStatus Status { get; set; } = AppointmentStatus.Pending;

        [MaxLength(500)]
        public string? Symptoms { get; set; }

        [MaxLength(500)]
        public string? Remarks { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        

        // Navigation
        [ForeignKey(nameof(PatientId))]
        public User Patient { get; set; }

        [ForeignKey(nameof(DoctorId))]
        public Doctor Doctor { get; set; }

        [ForeignKey(nameof(StaffId))]
        public Staff? Staff { get; set; }


        public Bill? Bill { get; set; }
    }
}
