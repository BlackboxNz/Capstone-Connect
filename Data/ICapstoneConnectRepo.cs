using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Capstone_Connect.Dtos;
using Capstone_Connect.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Capstone_Connect.Data
{
    public interface ICapstoneConnectRepo
    {
        //General functions
        public void SaveChanges();

        //Project Functions
        public void AwardProject(Project project);
        public void DeleteProject(int id);
        public IEnumerable<Project> GetAllProjects();
        public Project GetProjectByID(int id);
        public Project AddProject(Project project);
        public void SubmitProject(Project project);
        public IEnumerable<Project> GetAllItems(String name);

        // Delete User
        public string GetFilePath(string Filename);
        //public void UploadProjectImage(IFormFile file);
        public void DeleteUser(Visitor user);
        public void DeleteAdmin(string email);
        public void DeleteStudent(string email);
        public void DeleteVisitor(string email);

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
        public void RegisterVisitor(Visitor visitor);

        public Student GetStudentByEmail(string email);
        public void RegisterStudent(Student student);
        public string GetCode();
        public void SetCode(string new_code);

        public Admin GetAdminByEmail(string email);
        public Admin AddAdmin(Admin user);

        //Comment
        public Comment WriteComment(Comment comment);
        public void DeleteComment(Comment comment);
        public IEnumerable<Comment> GetAllCommentsByID(int projectID);
        public IEnumerable<Comment> GetComments();
        public Comment GetCommentByID(int id);
    }
}