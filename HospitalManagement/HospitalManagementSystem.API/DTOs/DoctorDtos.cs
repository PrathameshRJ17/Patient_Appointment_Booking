namespace HospitalManagementSystem.API.DTOs
{
    public class CreateDoctorDto
    {
        public int UserId { get; set; }
        public string Specialization { get; set; }
        public int ExperienceYears { get; set; }
        public string Qualification { get; set; }
        public decimal ConsultationFee { get; set; }
    }

    public class UpdateDoctorDto
    {
        public string? FullName { get; set; }
        public string? Name { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Specialization { get; set; }
        public int? ExperienceYears { get; set; }
        public string? Qualification { get; set; }
        public decimal? ConsultationFee { get; set; }
        public string? AvailabilityStatus { get; set; }
    }

    public class DoctorResponseDto
    {
        public int DoctorId { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string? Phone { get; set; }
        public string Specialization { get; set; }
        public int ExperienceYears { get; set; }
        public string Qualification { get; set; }
        public decimal ConsultationFee { get; set; }
        public string Availability { get; set; }
    }

    public class RemarksDto
    {
        public string Remarks { get; set; }
    }
}
