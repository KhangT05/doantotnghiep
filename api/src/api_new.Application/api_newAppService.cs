using api_new.Localization;
using Volo.Abp.Application.Services;

namespace api_new;

/* Inherit your application services from this class.
 */
public abstract class api_newAppService : ApplicationService
{
    protected api_newAppService()
    {
        LocalizationResource = typeof(api_newResource);
    }
}
