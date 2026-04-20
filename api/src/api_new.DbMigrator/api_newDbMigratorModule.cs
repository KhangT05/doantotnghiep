using api_new.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace api_new.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(api_newEntityFrameworkCoreModule),
    typeof(api_newApplicationContractsModule)
)]
public class api_newDbMigratorModule : AbpModule
{
}
