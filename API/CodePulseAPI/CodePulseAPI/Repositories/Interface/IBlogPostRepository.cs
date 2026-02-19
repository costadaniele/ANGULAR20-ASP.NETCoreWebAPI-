using CodePulseAPI.Models.Domain;

namespace CodePulseAPI.Repositories.Interface
{
    public interface IBlogPostRepository
    {
        Task<BlogPost> CreateAsync(BlogPost blogpost);

        Task<IEnumerable<BlogPost>> GetAllAsync();

        Task<BlogPost?> GetByIdAsync(Guid id);

        Task<BlogPost?> UpdateAsync(BlogPost blogpost);

        Task<BlogPost?> DeleteAsync(Guid id);
    }
}
