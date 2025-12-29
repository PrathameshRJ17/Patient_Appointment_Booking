using HospitalManagementSystem.API.DTOs;
using HospitalManagementSystem.API.Models.Entities;

namespace HospitalManagementSystem.API.Services.Interfaces
{
    public interface IAppointmentService
    {
        Task<IEnumerable<AppointmentResponseDto>> GetAllAppointmentsAsync();
        Task<AppointmentResponseDto?> GetAppointmentByIdAsync(int id);
        Task<IEnumerable<AppointmentResponseDto>> GetAppointmentsByPatientAsync(int patientId);
        Task<IEnumerable<AppointmentResponseDto>> GetAppointmentsByDoctorAsync(int doctorId);
        Task<AppointmentResponseDto?> UpdateAppointmentStatusAsync(UpdateAppointmentStatusDto dto, int staffId);
        Task<bool> DeleteAppointmentAsync(int id);

        Task<List<AvailableSlotDto>> GetAvailableSlotsAsync(int doctorId, DateTime date);
        Task<Appointment?> CreateAppointmentAsync(CreateAppointmentDto dto);
    }
}
