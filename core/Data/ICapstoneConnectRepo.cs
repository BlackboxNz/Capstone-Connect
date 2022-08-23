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
        //Project based functions
        IEnumerable<Project> GetAllProjects();
        Project GetProjectByID(int id);

        //Admin based functions

        //Student based functions

        //Visitor based functions

    }
}
