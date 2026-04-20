using Xunit;

namespace api_new.EntityFrameworkCore;

[CollectionDefinition(api_newTestConsts.CollectionDefinitionName)]
public class api_newEntityFrameworkCoreCollection : ICollectionFixture<api_newEntityFrameworkCoreFixture>
{

}
