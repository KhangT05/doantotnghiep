using api_new.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace api_new.Web.Pages;

public abstract class api_newPageModel : AbpPageModel
{
    protected api_newPageModel()
    {
        LocalizationResourceType = typeof(api_newResource);
    }
}
