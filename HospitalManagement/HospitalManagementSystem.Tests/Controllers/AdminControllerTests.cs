using Xunit;
using Moq;
using Microsoft.AspNetCore.Mvc;
using HospitalManagementSystem.API.Controllers;
using HospitalManagementSystem.API.Services.Interfaces;
using HospitalManagementSystem.API.DTOs;

namespace HospitalManagementSystem.Tests.Controllers
{
    public class AdminControllerTests
    {
        private readonly Mock<IAdminService> _mockAdminService;
        private readonly AdminController _controller;

        public AdminControllerTests()
        {
            _mockAdminService = new Mock<IAdminService>();
            _controller = new AdminController(_mockAdminService.Object);
        }

        [Fact]
        public async Task Counts_ReturnsOkResult()
        {
            // Arrange
            var counts = new DashboardCountsDto { TotalDoctors = 5, TotalPatients = 10, TotalStaff = 3, TotalAppointments = 20 };
            _mockAdminService.Setup(s => s.GetCountsAsync()).ReturnsAsync(counts);

            // Act
            var result = await _controller.Counts();

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnValue = Assert.IsType<DashboardCountsDto>(okResult.Value);
            Assert.Equal(5, returnValue.TotalDoctors);
        }

        [Fact]
        public async Task PendingUsers_ReturnsOkResult()
        {
            // Arrange
            var pendingUsers = new List<PendingUserDto>
            {
                new PendingUserDto { UserId = 1, FullName = "Test User", Email = "test@test.com", Role = "Doctor" }
            };
            _mockAdminService.Setup(s => s.GetPendingUsersAsync()).ReturnsAsync(pendingUsers);

            // Act
            var result = await _controller.PendingUsers();

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnValue = Assert.IsType<List<PendingUserDto>>(okResult.Value);
            Assert.Single(returnValue);
        }
    }
}
