using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using api_new.Data;
using Volo.Abp.DependencyInjection;

namespace api_new.EntityFrameworkCore;

public class EntityFrameworkCoreapi_newDbSchemaMigrator
    : Iapi_newDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreapi_newDbSchemaMigrator(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the api_newDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<api_newDbContext>()
            .Database
            .MigrateAsync();
    }
}
