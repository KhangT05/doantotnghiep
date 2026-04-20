using Volo.Abp.Modularity;

namespace api_new;

[DependsOn(
    typeof(api_newApplicationModule),
    typeof(api_newDomainTestModule)
)]
public class api_newApplicationTestModule : AbpModule
{

}
