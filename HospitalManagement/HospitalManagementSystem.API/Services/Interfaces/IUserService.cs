using HospitalManagementSystem.API.DTOs;

namespace HospitalManagementSystem.API.Services.Interfaces
{
    public interface IUserService
    {
        Task<UserResponseDto?> RegisterUserAsync(UserRegisterDto dto);
        Task<UserResponseDto?> LoginAsync(UserLoginDto dto);
        Task<IEnumerable<UserResponseDto>> GetAllUsersAsync();
        Task<UserResponseDto?> GetUserByIdAsync(int id);
        Task<UserResponseDto?> UpdateUserAsync(int id, UpdateUserDto dto);
        Task<UserResponseDto?> ApproveUserAsync(ApproveUserDto dto);
        Task<bool> DeleteUserAsync(int id);
        Task<object> SyncProfessionalsAsync();
    }
}
