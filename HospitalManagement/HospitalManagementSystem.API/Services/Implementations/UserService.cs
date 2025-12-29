using HospitalManagementSystem.API.DTOs;
using HospitalManagementSystem.API.Models.Entities;
using HospitalManagementSystem.API.Models.Enums;
using HospitalManagementSystem.API.Repositories.Interfaces;
using HospitalManagementSystem.API.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HospitalManagementSystem.API.Services.Implementations
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IStaffRepository _staffRepository;
        private readonly IDoctorRepository _doctorRepository;

        public UserService(IUserRepository userRepository, IStaffRepository staffRepository, IDoctorRepository doctorRepository)
        {
            _userRepository = userRepository;
            _staffRepository = staffRepository;
            _doctorRepository = doctorRepository;
        }

        public async Task<UserResponseDto?> RegisterUserAsync(UserRegisterDto dto)
        {
            var existingUser = await _userRepository.GetByEmailAsync(dto.Email);
            if (existingUser != null)
                throw new Exception("User with this email already exists.");

            var user = new User
            {
                FullName = dto.FullName,
                Email = dto.Email,
                Password = dto.Password,
                Gender = dto.Gender,
                DateOfBirth = dto.DateOfBirth,
                PhoneNumber = dto.PhoneNumber,
                Role = dto.Role,
                Status = dto.Role == UserRole.Patient ? AccountStatus.Approved : AccountStatus.Pending,
                Specialization = dto.Specialization,
                Qualification = dto.Qualification,
                ExperienceYears = dto.ExperienceYears,
                Department = dto.Department,
                CreatedAt = DateTime.UtcNow.Date
            };

            await _userRepository.AddAsync(user);
            await _userRepository.SaveAsync();

            Console.WriteLine($"[REGISTER] User created - Role: {user.Role}, Specialization: {user.Specialization}, Department: {user.Department}");

            return new UserResponseDto
            {
                UserId = user.UserId,
                FullName = user.FullName,
                Email = user.Email,
                Role = user.Role,
                Status = user.Status,
                Gender = user.Gender,
                DateOfBirth = user.DateOfBirth,
                PhoneNumber = user.PhoneNumber,
                CreatedAt = user.CreatedAt
            };
        }

        public async Task<UserResponseDto?> LoginAsync(UserLoginDto dto)
        {
            var user = await _userRepository.GetByEmailAsync(dto.Email);
            if (user == null || user.Password != dto.Password)
                return null;

            return new UserResponseDto
            {
                UserId = user.UserId,
                FullName = user.FullName,
                Email = user.Email,
                Role = user.Role,
                Status = user.Status,
                Gender = user.Gender,
                DateOfBirth = user.DateOfBirth,
                PhoneNumber = user.PhoneNumber,
                CreatedAt = user.CreatedAt
            };
        }

        public async Task<IEnumerable<UserResponseDto>> GetAllUsersAsync()
        {
            var users = await _userRepository.GetAllAsync();
            return users.Select(u => new UserResponseDto
            {
                UserId = u.UserId,
                FullName = u.FullName,
                Email = u.Email,
                Role = u.Role,
                Status = u.Status,
                Gender = u.Gender,
                DateOfBirth = u.DateOfBirth,
                PhoneNumber = u.PhoneNumber,
                CreatedAt = u.CreatedAt
            });
        }

        public async Task<UserResponseDto?> GetUserByIdAsync(int id)
        {
            var user = await _userRepository.GetByIdAsync(id);
            if (user == null) return null;

            return new UserResponseDto
            {
                UserId = user.UserId,
                FullName = user.FullName,
                Email = user.Email,
                Role = user.Role,
                Status = user.Status,
                Gender = user.Gender,
                DateOfBirth = user.DateOfBirth,
                PhoneNumber = user.PhoneNumber,
                CreatedAt = user.CreatedAt
            };
        }

        public async Task<UserResponseDto?> UpdateUserAsync(int id, UpdateUserDto dto)
        {
            Console.WriteLine($"[UPDATE USER] ID: {id}, FullName: {dto.FullName}, Email: {dto.Email}, Phone: {dto.PhoneNumber}, Gender: {dto.Gender}");
            
            var user = await _userRepository.GetByIdAsync(id);
            if (user == null)
            {
                Console.WriteLine($"[UPDATE USER] User not found with ID: {id}");
                return null;
            }

            Console.WriteLine($"[UPDATE USER] Current user: {user.FullName}, {user.Email}");

            // Check if email is being changed and if it's already taken
            if (!string.IsNullOrEmpty(dto.Email) && dto.Email != user.Email)
            {
                Console.WriteLine($"[UPDATE USER] Email change detected: {user.Email} -> {dto.Email}");
                var existingUser = await _userRepository.GetByEmailAsync(dto.Email);
                if (existingUser != null)
                {
                    Console.WriteLine($"[UPDATE USER] Email already in use");
                    throw new Exception("Email is already in use by another user.");
                }
                user.Email = dto.Email;
            }

            if (!string.IsNullOrEmpty(dto.FullName)) user.FullName = dto.FullName;
            if (!string.IsNullOrEmpty(dto.Gender)) user.Gender = dto.Gender;
            if (!string.IsNullOrEmpty(dto.PhoneNumber)) user.PhoneNumber = dto.PhoneNumber;
            user.UpdatedAt = DateTime.UtcNow;

            Console.WriteLine($"[UPDATE USER] Updated user: {user.FullName}, {user.Email}, {user.PhoneNumber}, {user.Gender}");

            await _userRepository.UpdateAsync(user);
            await _userRepository.SaveAsync();
            
            Console.WriteLine($"[UPDATE USER] Save completed");

            return new UserResponseDto
            {
                UserId = user.UserId,
                FullName = user.FullName,
                Email = user.Email,
                Role = user.Role,
                Status = user.Status,
                Gender = user.Gender,
                DateOfBirth = user.DateOfBirth,
                PhoneNumber = user.PhoneNumber,
                CreatedAt = user.CreatedAt
            };
        }

        public async Task<UserResponseDto?> ApproveUserAsync(ApproveUserDto dto)
        {
            var user = await _userRepository.GetByIdAsync(dto.UserId);
            if (user == null) return null;

            Console.WriteLine($"[APPROVE] User {user.UserId}, Role: {user.Role}, Status: {dto.Status}");

            user.Status = dto.Status;
            user.UpdatedAt = DateTime.UtcNow;

            await _userRepository.UpdateAsync(user);
            await _userRepository.SaveAsync();

            // Auto-create Staff record when staff user is approved
            if (user.Role == UserRole.Staff && dto.Status == AccountStatus.Approved)
            {
                Console.WriteLine($"[APPROVE] Creating Staff record for user {user.UserId}");
                var existingStaff = await _staffRepository.GetByIdAsync(user.UserId);
                if (existingStaff == null)
                {
                    var staff = new Staff
                    {
                        StaffId = user.UserId,
                        Department = user.Department ?? "General",
                        Position = "Staff",
                        ShiftTiming = dto.ShiftTiming ?? "9:00 AM - 5:00 PM",
                        CreatedAt = DateTime.UtcNow
                    };
                    await _staffRepository.AddAsync(staff);
                    await _staffRepository.SaveAsync();
                    Console.WriteLine($"[APPROVE] Staff record created with Department: {staff.Department}");
                }
                else
                {
                    Console.WriteLine($"[APPROVE] Staff record already exists");
                }
            }

            // Auto-create Doctor record when doctor user is approved
            if (user.Role == UserRole.Doctor && dto.Status == AccountStatus.Approved)
            {
                Console.WriteLine($"[APPROVE] Creating Doctor record for user {user.UserId}");
                Console.WriteLine($"[APPROVE] User data - Specialization: '{user.Specialization}', Qualification: '{user.Qualification}', Experience: {user.ExperienceYears}");
                var existingDoctor = await _doctorRepository.GetByIdAsync(user.UserId);
                if (existingDoctor == null)
                {
                    var doctor = new Doctor
                    {
                        DoctorId = user.UserId,
                        Specialization = user.Specialization ?? "General Physician",
                        Qualification = user.Qualification ?? "MBBS",
                        ExperienceYears = user.ExperienceYears ?? 0,
                        ConsultationFee = 500,
                        AvailabilityStatus = "Available",
                        CreatedAt = DateTime.UtcNow
                    };
                    await _doctorRepository.AddAsync(doctor);
                    await _doctorRepository.SaveAsync();
                    Console.WriteLine($"[APPROVE] Doctor record created with Specialization: '{doctor.Specialization}', Qualification: '{doctor.Qualification}', Experience: {doctor.ExperienceYears}");
                }
                else
                {
                    Console.WriteLine($"[APPROVE] Doctor record already exists");
                }
            }

            return new UserResponseDto
            {
                UserId = user.UserId,
                FullName = user.FullName,
                Email = user.Email,
                Role = user.Role,
                Status = user.Status,
                Gender = user.Gender,
                DateOfBirth = user.DateOfBirth,
                PhoneNumber = user.PhoneNumber,
                CreatedAt = user.CreatedAt
            };
        }

        public async Task<bool> DeleteUserAsync(int id)
        {
            var user = await _userRepository.GetByIdAsync(id);
            if (user == null) return false;

            await _userRepository.DeleteAsync(user);
            await _userRepository.SaveAsync();
            return true;
        }

        public async Task<object> SyncProfessionalsAsync()
        {
            var users = await _userRepository.GetAllAsync();
            int staffCreated = 0;
            int doctorCreated = 0;

            foreach (var user in users)
            {
                if (user.Role == UserRole.Staff && user.Status == AccountStatus.Approved)
                {
                    var existingStaff = await _staffRepository.GetByIdAsync(user.UserId);
                    if (existingStaff == null)
                    {
                        var staff = new Staff
                        {
                            StaffId = user.UserId,
                            Department = "General",
                            Position = "Staff",
                            ShiftTiming = "9:00 AM - 5:00 PM",
                            CreatedAt = DateTime.UtcNow
                        };
                        await _staffRepository.AddAsync(staff);
                        staffCreated++;
                    }
                }

                if (user.Role == UserRole.Doctor && user.Status == AccountStatus.Approved)
                {
                    var existingDoctor = await _doctorRepository.GetByIdAsync(user.UserId);
                    if (existingDoctor == null)
                    {
                        var doctor = new Doctor
                        {
                            DoctorId = user.UserId,
                            Specialization = "General Physician",
                            Qualification = "MBBS",
                            ExperienceYears = 0,
                            ConsultationFee = 500,
                            AvailabilityStatus = "Available",
                            CreatedAt = DateTime.UtcNow
                        };
                        await _doctorRepository.AddAsync(doctor);
                        doctorCreated++;
                    }
                }
            }

            await _staffRepository.SaveAsync();
            await _doctorRepository.SaveAsync();

            return new { staffCreated, doctorCreated, message = $"Created {staffCreated} staff and {doctorCreated} doctor records" };
        }
    }
}
