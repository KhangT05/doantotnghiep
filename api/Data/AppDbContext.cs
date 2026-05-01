using DoAnTotNghiep.API.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace DoAnTotNghiep.API.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    public DbSet<Users> Users { get; set; }
}