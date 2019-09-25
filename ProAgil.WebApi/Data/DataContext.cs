using Microsoft.EntityFrameworkCore;
using ProAgil.WebApi.Model;

namespace ProAgil.WebApi.Data{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> dbOptions) :base(dbOptions){}
        public DbSet<Evento> Eventos { get; set; }
        
    }
}