// HospitalManagementSystem.API/Controllers/DoctorController.cs
using HospitalManagementSystem.API.DTOs;
using HospitalManagementSystem.API.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace HospitalManagementSystem.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize] // authenticated users by default
    public class DoctorController : ControllerBase
    {
        private readonly IDoctorService _doctorService;

        public DoctorController(IDoctorService doctorService)
        {
            _doctorService = doctorService;
        }

        // Allow all authenticated users (Admin, Doctor, Staff, Patient) to list doctors
        [Authorize(Roles = "Admin,Doctor,Staff,Patient")]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var doctors = await _doctorService.GetAllDoctorsAsync();
            return Ok(doctors);
        }

        // Allow authenticated users to view specific doctor
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var doctor = await _doctorService.GetDoctorByIdAsync(id);
            if (doctor == null)
                return NotFound();
            return Ok(doctor);
        }

        // Admin, Doctor, or Staff can update
        [Authorize(Roles = "Admin,Doctor,Staff")]
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, UpdateDoctorDto dto)
        {
            Console.WriteLine($"[UpdateDoctor] ID: {id}, FullName: {dto.FullName}, ConsultationFee: {dto.ConsultationFee}");
            var updatedDoctor = await _doctorService.UpdateDoctorAsync(id, dto);
            if (updatedDoctor == null)
                return NotFound();
            Console.WriteLine($"[UpdateDoctor] Updated - FullName: {updatedDoctor.FullName}");
            return Ok(updatedDoctor);
        }

        // Only Admin can delete
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _doctorService.DeleteDoctorAsync(id);
            if (!result)
                return NotFound();
            return Ok("Doctor deleted successfully.");
        }

        [Authorize(Roles = "Admin,Doctor")]
        [HttpPut("{doctorId}/appointment/{appointmentId}/remarks")]
        public async Task<IActionResult> AddRemarks(int doctorId, int appointmentId, [FromBody] string remarks)
        {
            var userRole = User.FindFirst(ClaimTypes.Role)?.Value;
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            Console.WriteLine($"[AddRemarks] User Role: {userRole}, UserId: {userId}, DoctorId: {doctorId}, AppointmentId: {appointmentId}, Remarks: {remarks}");
            try
            {
                var updated = await _doctorService.AddRemarksAsync(appointmentId, doctorId, remarks);
                if (updated == null) return NotFound();
                return Ok(updated);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[AddRemarks] Error: {ex.Message}");
                return BadRequest(new { message = ex.Message });
            }
        }

        [Authorize(Roles = "Admin,Doctor")]
        [HttpPut("{doctorId}/appointment/{appointmentId}/mark-done")]
        public async Task<IActionResult> MarkAsDone(int doctorId, int appointmentId, [FromBody] RemarksDto dto)
        {
            Console.WriteLine($"[MARK AS DONE] DoctorId: {doctorId}, AppointmentId: {appointmentId}, Remarks: {dto?.Remarks}");
            try
            {
                var updated = await _doctorService.MarkAppointmentAsDoneAsync(appointmentId, doctorId, dto?.Remarks ?? "");
                if (updated == null)
                {
                    Console.WriteLine($"[MARK AS DONE] Appointment not found");
                    return NotFound(new { message = "Appointment not found" });
                }
                Console.WriteLine($"[MARK AS DONE] Success");
                return Ok(updated);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[MARK AS DONE] Error: {ex.Message}");
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet("me/appointments")]
        public async Task<IActionResult> GetMyAppointments()
        {
            var doctorIdStr = User.FindFirst("doctorId")?.Value
                           ?? User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrWhiteSpace(doctorIdStr))
                return Unauthorized("DoctorId not found in token.");

            int doctorId = int.Parse(doctorIdStr);
            var items = await _doctorService.GetAppointmentsByDoctorAsync(doctorId);
            return Ok(items); // JSON array of AppointmentResponseDto
        }
    }
}