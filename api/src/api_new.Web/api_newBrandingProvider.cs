using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;
using Microsoft.Extensions.Localization;
using api_new.Localization;

namespace api_new.Web;

[Dependency(ReplaceServices = true)]
public class api_newBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<api_newResource> _localizer;

    public api_newBrandingProvider(IStringLocalizer<api_newResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}
