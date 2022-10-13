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
        void AwardProject(Project project, Tag tag);
        void ApproveProject(Project project);
        void RejectProject(Project project);
        IEnumerable<Project> GetAllProjects();
        Project GetProjectByID(int id);
        void DeleteProject(int id);
        Project AddProject(Project project);
        void LikeProject(Project project, User user);
        void SubmitProject(Project project);
        //IEnumerable<Comment> GetProjectComments(Project project)

        //User Functions

        User RegisterUser(User user);
        User GetUserByEmail(string email);
        void DeleteUser(User user);
        public bool ValidLogin(string email, string password, string userlevel);
        //Team Functions
        Team AddTeam(Team team);
        IEnumerable<Team> GetAllTeams();
        Team GetTeamByID(int id);
        void DeleteTeam(int id);
        //Comment functions
        void DeleteComment(Comment comment);
        Comment WriteComment(Comment comment);
        //Comment GetProjectComments(Project project)

        //Tag functions
        void AddTag(Tag tag);
        void DeleteTag(Tag tag);
        void TagProject(Project project, Tag tag);
    }
}