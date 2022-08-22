using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Capstone_Connect.Model;

namespace Capstone_Connect.Data
{
    public interface ICapstoneConnectRepo
    {
        IEnumerable<Project> GetAllProjects();
        Project GetProjectByID(int id);
    }
}
