using HospitalManagementSystem.API.Models.Enums;

namespace HospitalManagementSystem.API.DTOs
{
    public class BillResponseDto
    {
        public int BillId { get; set; }
        public int AppointmentId { get; set; }
        public string PatientName { get; set; }
        public decimal DoctorFee { get; set; }
        public decimal? AdditionalCharges { get; set; }
        public decimal TotalAmount { get; set; }
        public PaymentStatus PaymentStatus { get; set; }
        public DateTime GeneratedAt { get; set; }
        public int PatientId { get; internal set; }
    }

    public class UpdateBillPaymentDto
    {
        public int BillId { get; set; }
        public PaymentStatus PaymentStatus { get; set; }
    }
}
