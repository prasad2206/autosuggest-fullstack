
using autosuggest_api.Models;
using Microsoft.EntityFrameworkCore;

namespace autosuggest_api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Suggestion> Suggestions { get; set; } = null!;

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        // Optional: configure model
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Suggestion>().HasKey(s => s.Id);
            modelBuilder.Entity<Suggestion>().Property(s => s.Text).IsRequired().HasMaxLength(500);
            base.OnModelCreating(modelBuilder);
        }
    }
}
