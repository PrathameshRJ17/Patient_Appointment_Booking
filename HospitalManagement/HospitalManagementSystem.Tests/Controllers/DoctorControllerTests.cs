using Xunit;
using Moq;
using Microsoft.AspNetCore.Mvc;
using HospitalManagementSystem.API.Controllers;
using HospitalManagementSystem.API.Services.Interfaces;
using HospitalManagementSystem.API.DTOs;

namespace HospitalManagementSystem.Tests.Controllers
{
    public class DoctorControllerTests
    {
        private readonly Mock<IDoctorService> _mockDoctorService;
        private readonly DoctorController _controller;

        public DoctorControllerTests()
        {
            _mockDoctorService = new Mock<IDoctorService>();
            _controller = new DoctorController(_mockDoctorService.Object);
        }

        [Fact]
        public async Task GetAll_ReturnsOkResult()
        {
            // Arrange
            var doctors = new List<DoctorResponseDto>
            {
                new DoctorResponseDto { DoctorId = 1, FullName = "Dr. Smith", Specialization = "Cardiology" }
            };
            _mockDoctorService.Setup(s => s.GetAllDoctorsAsync()).ReturnsAsync(doctors);

            // Act
            var result = await _controller.GetAll();

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnValue = Assert.IsType<List<DoctorResponseDto>>(okResult.Value);
            Assert.Single(returnValue);
        }

        [Fact]
        public async Task GetById_ReturnsOkResult_WhenDoctorExists()
        {
            // Arrange
            var doctor = new DoctorResponseDto { DoctorId = 1, FullName = "Dr. Smith", Specialization = "Cardiology" };
            _mockDoctorService.Setup(s => s.GetDoctorByIdAsync(1)).ReturnsAsync(doctor);

            // Act
            var result = await _controller.GetById(1);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnValue = Assert.IsType<DoctorResponseDto>(okResult.Value);
            Assert.Equal("Dr. Smith", returnValue.FullName);
        }

        [Fact]
        public async Task GetById_ReturnsNotFound_WhenDoctorDoesNotExist()
        {
            // Arrange
            _mockDoctorService.Setup(s => s.GetDoctorByIdAsync(999)).ReturnsAsync((DoctorResponseDto)null);

            // Act
            var result = await _controller.GetById(999);

            // Assert
            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async Task Update_ReturnsOkResult_WhenDoctorExists()
        {
            // Arrange
            var dto = new UpdateDoctorDto { FullName = "Dr. Updated", ConsultationFee = 500 };
            var updated = new DoctorResponseDto { DoctorId = 1, FullName = "Dr. Updated" };
            _mockDoctorService.Setup(s => s.UpdateDoctorAsync(1, dto)).ReturnsAsync(updated);

            // Act
            var result = await _controller.Update(1, dto);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            Assert.IsType<DoctorResponseDto>(okResult.Value);
        }

        [Fact]
        public async Task Delete_ReturnsOkResult_WhenDoctorExists()
        {
            // Arrange
            _mockDoctorService.Setup(s => s.DeleteDoctorAsync(1)).ReturnsAsync(true);

            // Act
            var result = await _controller.Delete(1);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal("Doctor deleted successfully.", okResult.Value);
        }
    }
}
