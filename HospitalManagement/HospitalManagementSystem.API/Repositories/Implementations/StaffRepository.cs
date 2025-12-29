using HospitalManagementSystem.API.Data;
using HospitalManagementSystem.API.Models.Entities;
using HospitalManagementSystem.API.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HospitalManagementSystem.API.Repositories.Implementations
{
    public class StaffRepository : IStaffRepository
    {
        private readonly HospitalDbContext _context;

        public StaffRepository(HospitalDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Staff>> GetAllAsync()
        {
            return await _context.Staffs
                .Include(s => s.User)
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<Staff?> GetByIdAsync(int id)
        {
            return await _context.Staffs
                .Include(s => s.User)
                .AsNoTracking()
                .FirstOrDefaultAsync(s => s.StaffId == id);
        }

        public async Task<Staff?> GetByUserIdAsync(int userId)
        {
            return await _context.Staffs
                .Include(s => s.User)
                .AsNoTracking()
                .FirstOrDefaultAsync(s => s.StaffId == userId);
        }

        public async Task AddAsync(Staff staff)
        {
            await _context.Staffs.AddAsync(staff);
        }

        public async Task UpdateAsync(Staff staff)
        {
            _context.Staffs.Update(staff);
            await Task.CompletedTask;
        }

        public async Task DeleteAsync(Staff staff)
        {
            _context.Staffs.Remove(staff);
            await Task.CompletedTask;
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
