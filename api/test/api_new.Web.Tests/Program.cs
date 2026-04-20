using Microsoft.AspNetCore.Builder;
using api_new;
using Volo.Abp.AspNetCore.TestBase;

var builder = WebApplication.CreateBuilder();
builder.Environment.ContentRootPath = GetWebProjectContentRootPathHelper.Get("api_new.Web.csproj"); 
await builder.RunAbpModuleAsync<api_newWebTestModule>(applicationName: "api_new.Web");

public partial class Program
{
}
