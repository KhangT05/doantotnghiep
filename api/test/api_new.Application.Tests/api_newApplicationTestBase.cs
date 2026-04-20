using Volo.Abp.Modularity;

namespace api_new;

public abstract class api_newApplicationTestBase<TStartupModule> : api_newTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
