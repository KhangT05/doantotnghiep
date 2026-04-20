using Volo.Abp.Settings;

namespace api_new.Settings;

public class api_newSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(api_newSettings.MySetting1));
    }
}
