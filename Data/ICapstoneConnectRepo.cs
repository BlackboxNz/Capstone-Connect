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
        void SaveChanges();
        //Project Functions
        IEnumerable<Projects> GetAllProjects();
        Projects GetProjectByID(int id);
        void SubmitProject(Projects project);
        void LikeProject(Projects project, Users user);
        void AwardProject(Projects project, Tags tag);
        void ApproveProject(Projects project);
        void RejectProject(Projects project);
        void DeleteProject(int id);
        Projects AddProject(Projects project);


        //User Functions
        Users RegisterUser(Users user);
        Users GetUserByEmail(string email);
        void DeleteUser(Users user);
        public bool ValidLogin(string email, string password);

        //Team Functions
        Teams AddTeam(Teams team);
        IEnumerable<Teams> GetAllTeams();
        Teams GetTeamByID(int id);
        void DeleteTeam(int id);
        //Comment functions
        Comments WriteComment(Comments comment);
        void DeleteComment(Comments comment);
        //Comment GetProjectComments(Project project)


        //Tag functions
        void AddTag(Tags tag);
        void DeleteTag(Tags tag);
        void TagProject(Projects project, Tags tag);




        






    }
}