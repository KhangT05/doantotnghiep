using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace api_new.Data;

/* This is used if database provider does't define
 * Iapi_newDbSchemaMigrator implementation.
 */
public class Nullapi_newDbSchemaMigrator : Iapi_newDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
