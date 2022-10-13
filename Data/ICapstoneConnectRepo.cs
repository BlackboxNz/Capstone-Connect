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

        IEnumerable<Project> GetAllProject();
        Project GetProjectByID(int id);

        User RegisterUser(User user);
        User GetUserByEmail(string email);

        //Student based functions
        void SubmitProject(Project project);

        //Visitor based functions
        void LikeProject(Project project, User user);
        Comment WriteComment(Comment comment);
        //IEnumerable<Comment> GetProjectComments(Project project)

        //Admin based functions
        void AwardProject(Project project, Tags tag);
        void ApproveProject(Project project);
        void RejectProject(Project project);

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
        Project AddProject(Project project);

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

        void TagProject(Project project, Tags tag);

        void DeleteUser(User user);
        void DeleteComment(Comment comment);

        public bool ValidLogin(string email, string password);
        void SaveChanges();





        






<<<<<<< HEAD
>>>>>>> 03ea6af6ee4682b2d62766675212bd89af0b58b2:Data/ICapstoneConnectRepo.cs
=======
>>>>>>> 03ea6af6ee4682b2d62766675212bd89af0b58b2
    }
}