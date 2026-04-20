using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace api_new.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class api_newDbContextFactory : IDesignTimeDbContextFactory<api_newDbContext>
{
    public api_newDbContext CreateDbContext(string[] args)
    {
        var configuration = BuildConfiguration();
        
        api_newEfCoreEntityExtensionMappings.Configure();

        var builder = new DbContextOptionsBuilder<api_newDbContext>()
            .UseSqlite(configuration.GetConnectionString("Default"));
        
        return new api_newDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../api_new.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false)
            .AddEnvironmentVariables();

        return builder.Build();
    }
}
