using HospitalManagementSystem.API.Models.Entities;

namespace HospitalManagementSystem.API.Repositories.Interfaces
{
    public interface IBillRepository
    {
       
        Task<IEnumerable<Bill>> GetAllAsync();
        Task<IEnumerable<Bill>> GetByPatientIdAsync(int patientId);
        Task<Bill?> GetByIdAsync(int id);
        Task<Bill?> GetByAppointmentIdAsync(int appointmentId);
        Task AddAsync(Bill bill);
        Task UpdateAsync(Bill bill);
        Task DeleteAsync(Bill bill);
        Task SaveAsync();

    }
}
