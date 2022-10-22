using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Capstone_Connect.Dtos;
using Capstone_Connect.Model;
using Microsoft.AspNetCore.Mvc;

namespace Capstone_Connect.Data
{
    public interface ICapstoneConnectRepo
    {
        //General functions
        public void SaveChanges();

        //Project Functions
        public void AwardProject(Project project, Tag tag);
        public void DeleteProject(int id);
        public IEnumerable<Project> GetAllProjects();
        public Project GetProjectByID(int id);
        public Project AddProject(Project project);
        public void SubmitProject(Project project);
        public IEnumerable<Project> GetAllItems(String name);

        // Delete User
        public void DeleteUser(Visitor user);

        // Login
        public string GetAuth(string email);
        public bool VisitorLogin(string email, string password);
        public bool StudentLogin(string email, string password);
        public bool AdminLogin(string email, string password);

        // Like
        public void LikeProject(int projectID, string userType, int userID);
        public string GetLikedProjects(string userType, int userID);

        // Register 
        public Visitor GetVisitorByEmail(string email);
        public Visitor RegisterVisitor(Visitor visitor);

        public Student GetStudentByEmail(string email);
        public Student RegisterStudent(Student student);

        //Comment
        public Comment WriteComment(Comment comment);
        public void DeleteComment(Comment comment);
        public IEnumerable<Comment> GetAllCommentsByID(int projectID);
        public IEnumerable<Comment> GetComments();
        public Comment GetCommentByID(int id);

        //Tag
        public void AddTag(Tag tag);
        public void DeleteTag(Tag tag);
        public void TagProject(Project project, Tag tag);
    }
}