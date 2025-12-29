using HospitalManagementSystem.API.DTOs;

namespace HospitalManagementSystem.API.Services.Interfaces
{
    public interface IAdminService
    {
        Task<DashboardCountsDto> GetCountsAsync();
        Task<IEnumerable<RevenueDto>> GetRevenueByDateRangeAsync(DateTime from, DateTime to);
        Task<IEnumerable<PendingUserDto>> GetPendingUsersAsync();
        Task<IEnumerable<UpcomingAppointmentDto>> GetUpcomingAppointmentsAsync(DateTime from, DateTime to);
    }
}
