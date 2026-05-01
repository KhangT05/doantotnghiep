namespace API.Models.Entities;

public class BaseEntities
{
    public Guid id { get; set; }
    public string name { get; set; }
    public Boolean is_active { get; set; }
    public DateTime created_at { get; set; }
    public DateTime updated_at { get; set; }
    public DateTime deleted_at { get; set; }
}