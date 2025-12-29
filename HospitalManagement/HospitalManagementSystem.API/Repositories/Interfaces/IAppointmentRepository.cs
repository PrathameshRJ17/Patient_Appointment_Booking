using HospitalManagementSystem.API.Models.Entities;

namespace HospitalManagementSystem.API.Repositories.Interfaces
{
    public interface IAppointmentRepository
    {
        Task<IEnumerable<Appointment>> GetAllAsync();
        Task<Appointment?> GetByIdAsync(int id);
        Task<IEnumerable<Appointment>> GetByPatientIdAsync(int patientId);
        Task<IEnumerable<Appointment>> GetByDoctorIdAsync(int doctorId);
        Task<Appointment?> AddAsync(Appointment appointment);
        Task UpdateAsync(Appointment appointment);
        Task DeleteAsync(Appointment appointment);
        Task<List<Appointment>> GetAppointmentsForDoctorAndDate(int doctorId, DateTime date);
        Task<List<Appointment>> GetByDoctorAsync(int doctorId, DateTime? onDate = null);
        Task SaveAsync();
    }
}
