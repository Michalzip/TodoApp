

// using System.Data.Entity;
// using TodoModel.Model;
// namespace TodoApp_Backend
// {
//     public class todoContext : DbContext
//     {
//         public todoContext()
//         {
//         }
//         public DbSet<TodoItem> todoItems { get; set; }
//     }
// }


using Microsoft.EntityFrameworkCore;
using TodoModel.Model;
using System.Diagnostics.CodeAnalysis;
namespace TodoApp_Backend
{
    public class todoContext : DbContext
    {
        public todoContext(DbContextOptions<todoContext> options)
            : base(options)
        {
        }


//configure connection string
        protected override void OnConfiguring(DbContextOptionsBuilder opt){
            //ustalammy nazwe naszej bazy danych
opt.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=databaseContext;Trusted_Connection=True");

        }
        public DbSet<TodoItem> todoItems { get; set; }=null!;
    }
}


