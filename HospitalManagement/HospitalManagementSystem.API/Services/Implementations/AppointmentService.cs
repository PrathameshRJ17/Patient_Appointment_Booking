using HospitalManagementSystem.API.DTOs;
using HospitalManagementSystem.API.Models.Entities;
using HospitalManagementSystem.API.Models.Enums;
using HospitalManagementSystem.API.Repositories.Interfaces;
using HospitalManagementSystem.API.Services.Interfaces;

namespace HospitalManagementSystem.API.Services.Implementations
{
    public class AppointmentService : IAppointmentService
    {
        private readonly IAppointmentRepository _appointmentRepository;
        private readonly IUserRepository _userRepository;
        private readonly IDoctorRepository _doctorRepository;

        public AppointmentService(
            IAppointmentRepository appointmentRepository,
            IUserRepository userRepository,
            IDoctorRepository doctorRepository)
        {
            _appointmentRepository = appointmentRepository;
            _userRepository = userRepository;
            _doctorRepository = doctorRepository;
        }

        public async Task<IEnumerable<AppointmentResponseDto>> GetAllAppointmentsAsync()
        {
            var appointments = await _appointmentRepository.GetAllAsync();
            return appointments.Select(AppointmentResponseDto.FromEntity);
        }

        public async Task<AppointmentResponseDto?> GetAppointmentByIdAsync(int id)
        {
            var a = await _appointmentRepository.GetByIdAsync(id);
            if (a == null) return null;

            return AppointmentResponseDto.FromEntity(a);
        }

        public async Task<IEnumerable<AppointmentResponseDto>> GetAppointmentsByPatientAsync(int patientId)
        {
            var appointments = await _appointmentRepository.GetByPatientIdAsync(patientId);
            return appointments.Select(AppointmentResponseDto.FromEntity);
        }

        public async Task<IEnumerable<AppointmentResponseDto>> GetAppointmentsByDoctorAsync(int doctorId)
        {
            var appointments = await _appointmentRepository.GetByDoctorIdAsync(doctorId);
            return appointments.Select(AppointmentResponseDto.FromEntity);
        }

      

        public async Task<AppointmentResponseDto?> UpdateAppointmentStatusAsync(UpdateAppointmentStatusDto dto, int staffId)
        {
            var appointment = await _appointmentRepository.GetByIdAsync(dto.AppointmentId);
            if (appointment == null) return null;

            appointment.Status = dto.Status;
            appointment.Remarks = dto.Remarks;
            appointment.StaffId = staffId;

            await _appointmentRepository.UpdateAsync(appointment);
            await _appointmentRepository.SaveAsync();

            return AppointmentResponseDto.FromEntity(appointment);
        }

        public async Task<bool> DeleteAppointmentAsync(int id)
        {
            var appointment = await _appointmentRepository.GetByIdAsync(id);
            if (appointment == null) return false;

            await _appointmentRepository.DeleteAsync(appointment);
            await _appointmentRepository.SaveAsync();
            return true;
        }

        public async Task<List<AvailableSlotDto>> GetAvailableSlotsAsync(int doctorId, DateTime date)
        {
            // Get existing appointments (exclude rejected ones)
            var existing = await _appointmentRepository.GetAppointmentsForDoctorAndDate(doctorId, date);
            var bookedSlots = existing.Where(a => a.Status != AppointmentStatus.Rejected).ToList();
            
            Console.WriteLine($"\n[SLOTS] Doctor {doctorId}, Date {date:yyyy-MM-dd}: Found {bookedSlots.Count} booked slots");
            foreach (var apt in bookedSlots)
            {
                Console.WriteLine($"  Booked: {apt.SlotTime} (Status: {apt.Status})");
            }

            var slots = new List<AvailableSlotDto>();

            // Morning session 10:00 - 12:00
            for (var t = new TimeSpan(10, 0, 0); t < new TimeSpan(12, 0, 0); t += TimeSpan.FromMinutes(30))
                slots.Add(new AvailableSlotDto { StartTime = t });

            // Afternoon session 13:00 - 17:00
            for (var t = new TimeSpan(13, 0, 0); t < new TimeSpan(17, 0, 0); t += TimeSpan.FromMinutes(30))
                slots.Add(new AvailableSlotDto { StartTime = t });

            foreach (var slot in slots)
            {
                slot.IsAvailable = !bookedSlots.Any(a => a.SlotTime == slot.StartTime);
                Console.WriteLine($"  Slot {slot.StartTime}: {(slot.IsAvailable ? "Available" : "Booked")}");
            }

            return slots;
        }

        public async Task<Appointment?> CreateAppointmentAsync(CreateAppointmentDto dto)
        {
            var slotList = await GetAvailableSlotsAsync(dto.DoctorId, dto.AppointmentDate);

            if (!slotList.Any(s => s.StartTime == dto.SlotTime && s.IsAvailable))
                throw new Exception("Selected slot is already booked.");

            var appointment = new Appointment
            {
                DoctorId = dto.DoctorId,
                PatientId = dto.PatientId,
                AppointmentDate = dto.AppointmentDate,
                SlotTime = dto.SlotTime
            };

            return await _appointmentRepository.AddAsync(appointment);
        }
    }
}
