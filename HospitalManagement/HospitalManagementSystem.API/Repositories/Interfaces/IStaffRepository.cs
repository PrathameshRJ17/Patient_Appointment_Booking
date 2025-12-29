using HospitalManagementSystem.API.Models.Entities;

namespace HospitalManagementSystem.API.Repositories.Interfaces
{
    public interface IStaffRepository
    {
        Task<IEnumerable<Staff>> GetAllAsync();
        Task<Staff?> GetByIdAsync(int id);
        Task<Staff?> GetByUserIdAsync(int userId);
        Task AddAsync(Staff staff);
        Task UpdateAsync(Staff staff);
        Task DeleteAsync(Staff staff);
        Task SaveAsync();
    }
}
