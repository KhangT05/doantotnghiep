using api_new.Samples;
using Xunit;

namespace api_new.EntityFrameworkCore.Applications;

[Collection(api_newTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<api_newEntityFrameworkCoreTestModule>
{

}
