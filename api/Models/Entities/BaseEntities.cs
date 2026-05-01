namespace DoAnTotNghiep.API.Models.Entities;
/// <summary>
/// Base entity chứa các thuộc tính chung cho tất cả các bảng.
/// Bao gồm định danh và thông tin trạng thái, thời gian tạo/cập nhật.
/// </summary>
public abstract class BaseEntities
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Boolean IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
/// <summary>
/// Mở rộng từ BaseEntities để bổ sung thông tin audit (theo dõi người tạo/cập nhật).
/// </summary>
public abstract class AuditableEntity : BaseEntities
{
    public Guid? CreatedBy { get; set; }
    public Guid? UpdatedBy { get; set; }
}
/// <summary>
/// Định nghĩa contract cho các entity hỗ trợ soft delete.
/// Soft delete là cơ chế không xóa dữ liệu khỏi database,
/// mà chỉ đánh dấu đã bị xóa.
/// Lưu ý
/// Tất cả các fields trong interface của C# đều là public
/// </summary>
public interface ISoftDeletable
{
    bool IsDeleted { get; set; }
    DateTime? DeletedAt { get; set; }
    Guid? DeletedBy { get; set; }
}