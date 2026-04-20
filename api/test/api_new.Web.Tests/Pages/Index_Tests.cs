using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace api_new.Pages;

[Collection(api_newTestConsts.CollectionDefinitionName)]
public class Index_Tests : api_newWebTestBase
{
    [Fact]
    public async Task Welcome_Page()
    {
        var response = await GetResponseAsStringAsync("/");
        response.ShouldNotBeNull();
    }
}
