using System.Net;

namespace API.Common;

public class APIResponse<T>
{
    //get -> đọc giá trị còn init là gán giá trị khi khởi tạo object, set là gán bất cứ lúc nào
    public T? Data { get; init; }
    public bool Success { get; init; }
    public string? Message { get; init; }
    public object Error { get; init; }
    public DateTime Timestamp { get; init; }
    public int StatusCode { get; init; }

    public static APIResponse<T> Ok(T data, string? message) => new()
    {
        StatusCode = (int)HttpStatusCode.OK,
        Success = true,
        Data = data,
        Message = message,
        Timestamp = DateTime.UtcNow,
    };
    public static APIResponse<T> Fail(
        object error,
        string? message,
        HttpStatusCode statusCode = HttpStatusCode.InternalServerError
     ) => new()
     {
         StatusCode = (int)statusCode,
         Success = false,
         Error = error,
         Message = message,
         Timestamp = DateTime.UtcNow,
     };
    public static APIResponse<T> Messages(string? message) => new()
    {
        Success = true,
        Message = message,
        Timestamp = DateTime.UtcNow,
    };
}