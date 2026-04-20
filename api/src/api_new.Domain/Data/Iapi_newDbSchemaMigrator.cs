using System.Threading.Tasks;

namespace api_new.Data;

public interface Iapi_newDbSchemaMigrator
{
    Task MigrateAsync();
}
