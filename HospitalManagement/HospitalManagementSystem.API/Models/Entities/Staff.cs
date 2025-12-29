using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HospitalManagementSystem.API.Models.Entities
{
    public class Staff
    {
        [Key, ForeignKey("User")]
        public int StaffId { get; set; }

        [Required, MaxLength(100)]
        public string? Department { get; set; }

        [Required, MaxLength(100)]
        public string? Position { get; set; }

        [MaxLength(50)]
        public string? ShiftTiming { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Navigation
        public User User { get; set; }
        public ICollection<Appointment>? HandledAppointments { get; set; }
    }
}
