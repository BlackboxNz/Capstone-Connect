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
        public IEnumerable<Project> GetAllProjects();
        public Project GetProjectByID(int id);
        public void DeleteProject(int id);
        public Project AddProject(Project project);
        public void SubmitProject(Project project);
        public IEnumerable<Project> GetAllItems(String name);

        public void DeleteUser(Visitor user);
        //bool Login(string email, string password, string userlevel);
        public string GetAuth(string email);
        public bool VisitorLogin(string email, string password);
        public bool StudentLogin(string email, string password);
        public bool AdminLogin(string email, string password);
        public void LikeProject(int projectID, int userID);


        // Visitor 
        public Visitor GetVisitorByEmail(string email);
        public Visitor RegisterVisitor(Visitor visitor);

        public Student GetStudentByEmail(string email);
        public Student RegisterStudent(Student student);

        //Comment functions
        public Comment WriteComment(Comment comment);
        public void DeleteComment(Comment comment);
        public IEnumerable<Comment> GetAllCommentsByID(int projectID);
        public IEnumerable<Comment> GetComments();
        public Comment GetCommentByID(int id);


        //Tag functions
        public void AddTag(Tag tag);
        public void DeleteTag(Tag tag);
        public void TagProject(Project project, Tag tag);
    }
}