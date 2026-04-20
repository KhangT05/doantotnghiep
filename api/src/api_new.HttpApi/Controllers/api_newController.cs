using api_new.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace api_new.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class api_newController : AbpControllerBase
{
    protected api_newController()
    {
        LocalizationResource = typeof(api_newResource);
    }
}
