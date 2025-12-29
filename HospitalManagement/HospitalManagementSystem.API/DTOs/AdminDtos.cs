namespace HospitalManagementSystem.API.DTOs
{
    public class DashboardCountsDto
    {
        public int TotalUsers { get; set; }
        public int TotalPatients { get; set; }
        public int TotalDoctors { get; set; }
        public int TotalStaff { get; set; }
        public int TotalAppointments { get; set; }
        public int PendingApprovals { get; set; }
    }

    public class RevenueDto
    {
        public DateTime Date { get; set; }
        public decimal TotalRevenue { get; set; }
    }

    public class PendingUserDto
    {
        public int UserId { get; set; }
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
    }

    public class UpcomingAppointmentDto
    {
        public int AppointmentId { get; set; }
        public string PatientName { get; set; } = string.Empty;
        public string DoctorName { get; set; } = string.Empty;
        public DateTime AppointmentDate { get; set; }
        public string Status { get; set; } = string.Empty;
    }
}

