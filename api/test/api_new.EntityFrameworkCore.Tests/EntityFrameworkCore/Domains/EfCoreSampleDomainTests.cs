using api_new.Samples;
using Xunit;

namespace api_new.EntityFrameworkCore.Domains;

[Collection(api_newTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<api_newEntityFrameworkCoreTestModule>
{

}
