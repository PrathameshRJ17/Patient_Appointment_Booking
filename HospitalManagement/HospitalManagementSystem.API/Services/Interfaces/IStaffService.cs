using HospitalManagementSystem.API.DTOs;

namespace HospitalManagementSystem.API.Services.Interfaces
{
    public interface IStaffService
    {
        Task<IEnumerable<StaffResponseDto>> GetAllStaffAsync();
        Task<StaffResponseDto?> GetStaffByIdAsync(int id);
        Task<StaffResponseDto?> CreateStaffAsync(CreateStaffDto dto);
        Task<StaffResponseDto?> UpdateStaffAsync(int id, UpdateStaffDto dto);
        Task<bool> DeleteStaffAsync(int id);

        // 🔹 Phase 2 Additions
        Task<AppointmentResponseDto?> ApproveAppointmentAsync(int staffId, int appointmentId);
        Task<AppointmentResponseDto?> RejectAppointmentAsync(int staffId, int appointmentId, string? remarks);
        Task<AppointmentResponseDto?> MarkAppointmentCompletedAsync(int staffId, int appointmentId, string? remarks);
        Task<bool> DeleteAppointmentAsync(int appointmentId);
    }
}
