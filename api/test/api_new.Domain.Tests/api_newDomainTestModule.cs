using Volo.Abp.Modularity;

namespace api_new;

[DependsOn(
    typeof(api_newDomainModule),
    typeof(api_newTestBaseModule)
)]
public class api_newDomainTestModule : AbpModule
{

}
