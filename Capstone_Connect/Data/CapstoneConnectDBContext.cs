using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Globalization;
using Microsoft.EntityFrameworkCore;
using Capstone_Connect.Model;

namespace Capstone_Connect.Data
{
    public class CapstoneConnectDBContext : DbContext
    {
        public CapstoneConnectDBContext(DbContextOptions<CapstoneConnectDBContext> options) : base(options) { }
        public DbSet<Projects> Projects { get; set; }
        public DbSet<Users> Users { get; set; }
        public DbSet<Tags> Tags { get; set; }
        public DbSet<Teams> Teams { get; set; }
        public DbSet<Comments> Comments { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source = Capstone_ConnectDB.sqlite");
        }
    }
}
