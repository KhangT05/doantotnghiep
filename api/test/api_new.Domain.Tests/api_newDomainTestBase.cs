using Volo.Abp.Modularity;

namespace api_new;

/* Inherit from this class for your domain layer tests. */
public abstract class api_newDomainTestBase<TStartupModule> : api_newTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
