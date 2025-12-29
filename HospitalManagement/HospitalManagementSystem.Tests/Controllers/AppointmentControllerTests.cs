using Xunit;
using Moq;
using Microsoft.AspNetCore.Mvc;
using HospitalManagementSystem.API.Controllers;
using HospitalManagementSystem.API.Services.Interfaces;
using HospitalManagementSystem.API.DTOs;
using HospitalManagementSystem.API.Models.Entities;

namespace HospitalManagementSystem.Tests.Controllers
{
    public class AppointmentControllerTests
    {
        private readonly Mock<IAppointmentService> _mockAppointmentService;
        private readonly AppointmentController _controller;

        public AppointmentControllerTests()
        {
            _mockAppointmentService = new Mock<IAppointmentService>();
            _controller = new AppointmentController(_mockAppointmentService.Object);
        }

        [Fact]
        public async Task GetAll_ReturnsOkResult()
        {
            // Arrange
            var appointments = new List<AppointmentResponseDto>
            {
                new AppointmentResponseDto { AppointmentId = 1, PatientName = "John Doe", DoctorName = "Dr. Smith" }
            };
            _mockAppointmentService.Setup(s => s.GetAllAppointmentsAsync()).ReturnsAsync(appointments);

            // Act
            var result = await _controller.GetAll();

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnValue = Assert.IsType<List<AppointmentResponseDto>>(okResult.Value);
            Assert.Single(returnValue);
        }

        [Fact]
        public async Task GetByPatient_ReturnsOkResult()
        {
            // Arrange
            var appointments = new List<AppointmentResponseDto>
            {
                new AppointmentResponseDto { AppointmentId = 1, PatientName = "John Doe" }
            };
            _mockAppointmentService.Setup(s => s.GetAppointmentsByPatientAsync(1)).ReturnsAsync(appointments);

            // Act
            var result = await _controller.GetByPatient(1);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnValue = Assert.IsType<List<AppointmentResponseDto>>(okResult.Value);
            Assert.Single(returnValue);
        }

        [Fact]
        public async Task GetByDoctor_ReturnsOkResult()
        {
            // Arrange
            var appointments = new List<AppointmentResponseDto>
            {
                new AppointmentResponseDto { AppointmentId = 1, DoctorName = "Dr. Smith" }
            };
            _mockAppointmentService.Setup(s => s.GetAppointmentsByDoctorAsync(1)).ReturnsAsync(appointments);

            // Act
            var result = await _controller.GetByDoctor(1);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnValue = Assert.IsType<List<AppointmentResponseDto>>(okResult.Value);
            Assert.Single(returnValue);
        }

        [Fact]
        public async Task CreateAppointment_ReturnsOkResult()
        {
            // Arrange
            var dto = new CreateAppointmentDto { PatientId = 1, DoctorId = 1, AppointmentDate = DateTime.Now, SlotTime = new TimeSpan(10, 0, 0) };
            var appointment = new Appointment { AppointmentId = 1, PatientId = 1, DoctorId = 1 };
            _mockAppointmentService.Setup(s => s.CreateAppointmentAsync(dto)).ReturnsAsync(appointment);

            // Act
            var result = await _controller.CreateAppointment(dto);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            Assert.IsType<Appointment>(okResult.Value);
        }
    }
}
