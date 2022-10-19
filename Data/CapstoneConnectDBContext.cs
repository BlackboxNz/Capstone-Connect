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
        public DbSet<Project> Project { get; set; }
        public DbSet<Visitor> User { get; set; }
        public DbSet<Tag> Tag { get; set; }
        public DbSet<Team> Team { get; set; }
        public DbSet<Comment> Comment { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source = Capstone_ConnectDB.sqlite");
        }
    }
}
