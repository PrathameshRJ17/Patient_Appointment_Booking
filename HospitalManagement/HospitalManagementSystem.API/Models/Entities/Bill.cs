using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HospitalManagementSystem.API.Models.Enums;

namespace HospitalManagementSystem.API.Models.Entities
{
    public class Bill
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BillId { get; set; }

        [Required]
        public int AppointmentId { get; set; }

        [Required]
        public int PatientId { get; set; }

        [Required, Column(TypeName = "decimal(10,2)")]
        public decimal DoctorFee { get; set; }

        [Column(TypeName = "decimal(10,2)")]
        public decimal? AdditionalCharges { get; set; }

        [Required, Column(TypeName = "decimal(10,2)")]
        public decimal TotalAmount { get; set; }

        [Required]
        public PaymentStatus PaymentStatus { get; set; } = PaymentStatus.Unpaid;

        public DateTime GeneratedAt { get; set; } = DateTime.UtcNow;

        // Navigation
        [ForeignKey(nameof(AppointmentId))]
        public Appointment Appointment { get; set; }

        [ForeignKey(nameof(PatientId))]
        public User Patient { get; set; }
    }
}
