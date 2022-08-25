using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Globalization;
using Capstone_Connect.Model;

namespace Capstone_Connect.Data
{
    public class DBCapstoneConnectRepo: ICapstoneConnectRepo
    {
        private readonly CapstoneConnectDBContext _dbContext;

        public DBCapstoneConnectRepo(CapstoneConnectDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        //General functions
        public IEnumerable<Project> GetAllProjects()
        {
            IEnumerable<Project> projects = _dbContext.Projects.ToList<Project>();
            return projects;
        }

        public Project GetProjectByID(int id)
        {
            Project project = _dbContext.Projects.FirstOrDefault(e => e.ID == id);
            return project;
        }

        //Staff functions

        //Student functions


        //Visitor functions


    }
}