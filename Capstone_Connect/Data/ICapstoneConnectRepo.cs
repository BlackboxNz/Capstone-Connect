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
        //General functions
        IEnumerable<Projects> GetAllProjects();
        Projects GetProjectByID(int id);

        Users RegisterUser(Users user);
        Users GetUserByEmail(string email);
        //Student based functions
        void SubmitProject(Projects project);
        //Visitor based functions
        void LikeProject(Projects project, Users user);
        Comments WriteComment(Comments comment);
        //Comment GetProjectComments(Project project)
        //Admin based functions
        void AwardProject(Projects project, Tags tag);
        void ApproveProject(Projects project);
        void RejectProject(Projects project);
        void DeleteProject(int id);
        Projects AddProject(Projects project);

        void AddTag(Tags tag);
        void DeleteTag(Tags tag);

        void TagProject(Projects project, Tags tag);

        void DeleteUser(Users user);
        void DeleteComment(Comments comment);

        
        public bool ValidLogin(string email, string password);
        void SaveChanges();




    }
}