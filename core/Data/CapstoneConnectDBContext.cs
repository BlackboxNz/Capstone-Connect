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
       
        public DbSet<Project> Projects { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source = CapstoneConnectDB.sqlite");
        }
    }
}
