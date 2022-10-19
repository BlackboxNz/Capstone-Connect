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
        public DbSet<Project> Projects { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Visitor> Visitors { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<Comment> Comments { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source = Capstone_ConnectDB.sqlite");
        }
    }
}
