using HospitalManagementSystem.API.DTOs;

namespace HospitalManagementSystem.API.Services.Interfaces
{
    public interface IDoctorService
    {

        Task<IEnumerable<DoctorResponseDto>> GetAllDoctorsAsync();
        Task<DoctorResponseDto?> GetDoctorByIdAsync(int id);
        Task<DoctorResponseDto?> CreateDoctorAsync(CreateDoctorDto dto);
        Task<DoctorResponseDto?> UpdateDoctorAsync(int id, UpdateDoctorDto dto);
        Task<bool> DeleteDoctorAsync(int id);
        Task<AppointmentResponseDto?> AddRemarksAsync(int appointmentId, int doctorUserId, string remarks);
        Task<AppointmentResponseDto?> MarkAppointmentAsDoneAsync(int appointmentId, int doctorUserId, string remarks);
        Task<IEnumerable<BillResponseDto>> GetBillsByDoctorAsync(int doctorUserId);

        Task<IEnumerable<AppointmentResponseDto>> GetAppointmentsByDoctorAsync(int doctorId, DateTime? onDate = null);
    }
}
