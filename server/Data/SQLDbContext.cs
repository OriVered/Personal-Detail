
using Microsoft.EntityFrameworkCore;

public class SQLDbContext : DbContext
{
    public SQLDbContext(DbContextOptions<SQLDbContext> options) : base(options) { }

    public DbSet<PersonalDetail> PersonalDetails { get; set; }
}


