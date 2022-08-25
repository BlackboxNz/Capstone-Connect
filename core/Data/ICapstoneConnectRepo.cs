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
        IEnumerable<Project> GetAllProjects();
        Project GetProjectByID(int id);
        
        void RegisterUser(User user);

        //Student based functions
        void SubmitProject(Project project);

        //Visitor based functions
        void LikeProject(Project project, User user);
        void WriteComment(Comment comment);

        //Admin based functions
        void AwardProject(Project project, Tag tag);
        void ApproveProject(Project project);
        void RejectProject(Project project);
        void DeleteProject(Project project);

        void ApproveAdmin(User user);

        void AddTag(Tag tag);
        void DeleteTag(Tag tag);

        void DeleteUser(User user);
        void DeleteComment(Comment comment);
        

        

    }
}
