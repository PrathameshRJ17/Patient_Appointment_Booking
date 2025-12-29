namespace HospitalManagementSystem.API.DTOs
{
    public class CreateStaffDto
    {
        public int UserId { get; set; }
        public string Department { get; set; }
        public string Position { get; set; }
        public string? ShiftTiming { get; set; }
    }

    public class UpdateStaffDto
    {
        public string? FullName { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
    }

    public class StaffResponseDto
    {
        public int StaffId { get; set; }
        public int UserId { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string Department { get; set; }
        public string Position { get; set; }
        public string? ShiftTiming { get; set; }
        public string Status { get; set; }
    }
}
