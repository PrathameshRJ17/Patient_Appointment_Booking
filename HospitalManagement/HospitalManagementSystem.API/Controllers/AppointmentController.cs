using HospitalManagementSystem.API.DTOs;
using HospitalManagementSystem.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace HospitalManagementSystem.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class AppointmentController : ControllerBase
    {
        private readonly IAppointmentService _appointmentService;

        public AppointmentController(IAppointmentService appointmentService)
        {
            _appointmentService = appointmentService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var appointments = await _appointmentService.GetAllAppointmentsAsync();
            return Ok(appointments);
        }

        [HttpGet("patient/{patientId}")]
        public async Task<IActionResult> GetByPatient(int patientId)
        {
            var appointments = await _appointmentService.GetAppointmentsByPatientAsync(patientId);
            Console.WriteLine($"\n Returning {appointments.Count()} appointments for patient {patientId} ");
            foreach (var apt in appointments)
            {
                Console.WriteLine($"ID={apt.AppointmentId} | Doctor={apt.DoctorName} | Date={apt.AppointmentDate:yyyy-MM-dd} | TimeSlot='{apt.TimeSlot}' | TimeSlotDisplay='{apt.TimeSlotDisplay}' | Status={apt.Status}");
            }
            Console.WriteLine(" End of appointments \n");
            return Ok(appointments);
        }

        [HttpGet("doctor/{doctorId}")]
        public async Task<IActionResult> GetByDoctor(int doctorId)
        {
            Console.WriteLine($"\n Fetching appointments for doctor {doctorId}");
            var appointments = await _appointmentService.GetAppointmentsByDoctorAsync(doctorId);
            Console.WriteLine($"Found {appointments.Count()} appointments");
            foreach (var apt in appointments)
            {
                Console.WriteLine($"ID={apt.AppointmentId} | Patient={apt.PatientName} | Date={apt.AppointmentDate:yyyy-MM-dd} | Status={apt.Status}");
            }
            Console.WriteLine(" End of doctor appointments \n");
            return Ok(appointments);
        }

        [HttpGet("available-slots")]
        public async Task<IActionResult> GetSlots(int doctorId, DateTime date)
        {
            var slots = await _appointmentService.GetAvailableSlotsAsync(doctorId, date);
            return Ok(slots);
        }

        [HttpPost]
        public async Task<IActionResult> CreateAppointment(CreateAppointmentDto dto)
        {
            var result = await _appointmentService.CreateAppointmentAsync(dto);
            return Ok(result);
        }

    }
}
