using HospitalManagementSystem.API.Models.Entities;
using HospitalManagementSystem.API.Models.Enums;

namespace HospitalManagementSystem.API.DTOs
{
    public class CreateAppointmentDto
    {
        public int PatientId { get; set; }
        public int DoctorId { get; set; }
        public DateTime AppointmentDate { get; set; }
        public TimeSpan SlotTime { get; set; }

        public string? Symptoms { get; set; }
    }

    public class UpdateAppointmentStatusDto
    {
        public int AppointmentId { get; set; }
        public AppointmentStatus Status { get; set; }
        public string? Remarks { get; set; }
    }

    public class AppointmentResponseDto
    {
        public int AppointmentId { get; set; }
        public int PatientId { get; set; }
        public int DoctorId { get; set; }
        public string PatientName { get; set; } = string.Empty;
        public string DoctorName { get; set; } = string.Empty;
        public DateTime AppointmentDate { get; set; }
        public string TimeSlot { get; set; } = string.Empty;
        public string TimeSlotDisplay { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public string StatusText { get; set; } = string.Empty;
        public string? Symptoms { get; set; }
        public string? Remarks { get; set; }

        public static AppointmentResponseDto FromEntity(Appointment appointment)
        {
            var slot = appointment.SlotTime;
            var statusText = appointment.Status.ToString();
            
            // Always format the time slot
            var hours = slot.Hours;
            var minutes = slot.Minutes;
            var timeSlot = $"{hours:D2}:{minutes:D2}";
            var endTime = slot.Add(TimeSpan.FromMinutes(30));
            var timeSlotDisplay = $"{hours:D2}:{minutes:D2} - {endTime.Hours:D2}:{endTime.Minutes:D2}";
            
            Console.WriteLine($"Appointment {appointment.AppointmentId}: SlotTime={slot} -> Display='{timeSlotDisplay}'");
            return new AppointmentResponseDto
            {
                AppointmentId = appointment.AppointmentId,
                PatientId = appointment.PatientId,
                DoctorId = appointment.DoctorId,
                PatientName = appointment.Patient?.FullName ?? string.Empty,
                DoctorName = appointment.Doctor?.User?.FullName ?? string.Empty,
                AppointmentDate = appointment.AppointmentDate,
                TimeSlot = timeSlot,
                TimeSlotDisplay = timeSlotDisplay,
                Status = statusText,
                StatusText = statusText,
                Symptoms = appointment.Symptoms,
                Remarks = appointment.Remarks
            };
        }
    }

    public class AvailableSlotDto
    {
        public TimeSpan StartTime { get; set; }
        public string Display => StartTime.ToString(@"hh\:mm") + " - " +
        StartTime.Add(TimeSpan.FromMinutes(30)).ToString(@"hh\:mm");
        public bool IsAvailable { get; set; }
    }

    public class DoctorAvailableSlotsDto
    {
        public int DoctorId { get; set; }
        public string DoctorName { get; set; }
        public DateTime Date { get; set; }
        public List<AvailableSlotDto> Slots { get; set; }
    }
}
