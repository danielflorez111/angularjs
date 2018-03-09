using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace vega.Persistence
{
public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<VegaDbContext>
{
    public VegaDbContext CreateDbContext(string[] args)
    {
        IConfigurationRoot configuration = new ConfigurationBuilder()
            //.SetBasePath(Directory.GetCurrentDirectory())
            //.AddJsonFile("appsettings.json")
            .Build();
        var builder = new DbContextOptionsBuilder<VegaDbContext>();
        var connectionString = configuration.GetConnectionString("Default");
        builder.UseSqlServer("server=YUXMED0065L\\SQLEXPRESS; database=vega; Integrated Security = SSPI");
        return new VegaDbContext(builder.Options);
    }
}
}