using laundry.Models;
using Microsoft.EntityFrameworkCore;

namespace laundry.Data {
    public class MyDbContext : DbContext {
        public MyDbContext (DbContextOptions<MyDbContext> options) : base (options) { }

        public DbSet<Week> Weeks { get; set; }
    }
}