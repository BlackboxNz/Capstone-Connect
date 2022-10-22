using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Globalization;
using Capstone_Connect.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections;
using Capstone_Connect.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;

namespace Capstone_Connect.Data
{
    public class DBCapstoneConnectRepo : ICapstoneConnectRepo
    {
        private readonly CapstoneConnectDBContext _dbContext;

        public DBCapstoneConnectRepo(CapstoneConnectDBContext dbContext)
        {
            _dbContext = dbContext;
        }
        private string BASE_URL = "http://localhost:5000/img/Projects/";
        //General functions
        public IEnumerable<Project> GetAllProjects()
        {
            IEnumerable<Project> project = _dbContext.Projects.ToList<Project>();
            return project;
        }
        public IEnumerable<Project> GetAllItems(String name)
        {

            IEnumerable<Project> products = _dbContext.Projects.ToList<Project>();
            IEnumerable<Project> items = _dbContext.Projects.Where(e => e.TeamName.ToLower().Contains(name));

            return items;
        }
        public Project GetProjectByID(int id)
        {
            Project project = _dbContext.Projects.FirstOrDefault(e => e.ID == id);
            return project;
        }
        public Project AddProject(Project project)
        {
            EntityEntry<Project> e = _dbContext.Projects.Add(project);
            Project c = e.Entity;
            _dbContext.SaveChanges();
            return c;
        }

        //Student based project functions
        public void SubmitProject(Project project)
        {

        }

        //Admin based project functions
        public void AwardProject(Project project, Tag tag)
        {

        }
        public void DeleteProject(int id)
        {
            // Get existing projects
            IEnumerable<Project> projects = _dbContext.Projects.ToList<Project>();

            // Check if project exists
            Project project = projects.FirstOrDefault(e => e.ID == id);
            if (project != null)
            {
                // Delete project
                _dbContext.Projects.Remove(project);
                _dbContext.SaveChanges();
            }
        }

        // User Functions
        public string GetAuth(string email)
        {
            Admin a = _dbContext.Admins.FirstOrDefault(e => e.Email == email);
            Student s = _dbContext.Students.FirstOrDefault(e => e.Email == email);
            Visitor v = _dbContext.Visitors.FirstOrDefault(e => e.Email == email);

            if (a != null)
            {
                return "admin " + a.ID.ToString() + " " + a.FullName;
            }
            else if (s != null)
            {
                return "student " + s.ID.ToString() + " " + s.FullName;
            }
            else
            {
                return "visitor " + v.ID.ToString() + " " + v.FullName;
            }
        }

        public Visitor GetVisitorByEmail(string email)
        {
            Visitor visitor = _dbContext.Visitors.FirstOrDefault(e => e.Email == email);
            return visitor;
        }
        public Visitor RegisterVisitor(Visitor visitor)
        {
            EntityEntry<Visitor> e = _dbContext.Visitors.Add(visitor);
            Visitor c = e.Entity;
            _dbContext.SaveChanges();
            return c;
        }

        public Student GetStudentByEmail(string email)
        {
            Student student = _dbContext.Students.FirstOrDefault(e => e.Email == email);
            return student;
        }
        public Student RegisterStudent(Student user)
        {
            EntityEntry<Student> e = _dbContext.Students.Add(user);
            Student c = e.Entity;
            _dbContext.SaveChanges();
            return c;
        }

        public bool VisitorLogin(string email, string password)
        {
            Visitor visitor = _dbContext.Visitors.FirstOrDefault(e => e.Email == email && e.Password == password);
            if (visitor == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        public bool StudentLogin(string email, string password)
        {
            Student student = _dbContext.Students.FirstOrDefault(e => e.Email == email && e.Password == password);
            if (student == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        public bool AdminLogin(string email, string password)
        {
            Admin admin = _dbContext.Admins.FirstOrDefault(e => e.Email == email && e.Password == password);
            if (admin == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        public void LikeProject(int projectID, string userType, int userID)
        {
            Project p = _dbContext.Projects.FirstOrDefault(e => e.ID == projectID);
            Admin a = _dbContext.Admins.FirstOrDefault(e => e.ID == userID);
            Student s = _dbContext.Students.FirstOrDefault(e => e.ID == userID);
            Visitor v = _dbContext.Visitors.FirstOrDefault(e => e.ID == userID);

            if (userType == "admin")
            {
                if (a.LikedProjects == null)
                {
                    a.LikedProjects = new List<Project>() { p };
                    p.Likes++;
                }
                else if (a.LikedProjects.FirstOrDefault(p => p.ID == projectID) == null)
                {
                    a.LikedProjects.Add(p);
                    p.Likes++;
                }
                else
                {
                    a.LikedProjects.Remove(p);
                    p.Likes--;
                }
            }

            else if (userType == "student")
            {
                if (s.LikedProjects == null)
                {
                    s.LikedProjects = new List<Project>() { p };
                    p.Likes++;
                }
                else if (s.LikedProjects.FirstOrDefault(p => p.ID == projectID) == null)
                {
                    s.LikedProjects.Add(p);
                    p.Likes++;
                }
                else
                {
                    s.LikedProjects.Remove(p);
                    p.Likes--;
                }
            }

            else if (userType == "visitor")
            {
                if (v.LikedProjects == null)
                {
                    v.LikedProjects = new List<Project>() { p };
                    p.Likes++;
                }
                else if (v.LikedProjects.FirstOrDefault(p => p.ID == projectID) == null)
                {
                    v.LikedProjects.Add(p);
                    p.Likes++;
                }
                else
                {
                    v.LikedProjects.Remove(p);
                    p.Likes--;
                }
            }

            _dbContext.SaveChanges();
        }

        public string GetLikedProjects(string userType, int userID)
        {
            string id_list = "";
            Admin a = _dbContext.Admins.FirstOrDefault(e => e.ID == userID);
            Student s = _dbContext.Students.FirstOrDefault(e => e.ID == userID);
            Visitor v = _dbContext.Visitors.FirstOrDefault(e => e.ID == userID);

            if (userType == "admin")
            {
                if (a.LikedProjects != null)
                {
                    for (int i = 0; i < a.LikedProjects.Count(); i++)
                    {
                        id_list = id_list + "," + a.LikedProjects.ElementAt(i).ID.ToString();
                    }
                }
                return id_list;
            }
            else if (userType == "student")
            {
                if (s.LikedProjects != null)
                {
                    for (int i = 0; i < s.LikedProjects.Count(); i++)
                    {
                        id_list = id_list + "," + s.LikedProjects.ElementAt(i).ID.ToString();
                    }
                }
                return id_list;
            }
            else
            {
                if (v.LikedProjects != null)
                {
                    for (int i = 0; i < v.LikedProjects.Count(); i++)
                    {
                        id_list = id_list + "," + v.LikedProjects.ElementAt(i).ID.ToString();
                    }
                }
                return id_list;
            }
        }

        public void DeleteUser(Visitor user)
        {
            // Get all users
            IEnumerable<Visitor> users = _dbContext.Visitors.ToList<Visitor>();

            // Check if user exists
            if (users.FirstOrDefault(e => e.Email == user.Email) != null)
            {
                // Delete user
                Visitor userToDelete = users.FirstOrDefault(e => e.Email == user.Email);
                _dbContext.Visitors.Remove(userToDelete);
                _dbContext.SaveChanges();
            }
        }


        // Tag functions
        public void AddTag(Tag tag)
        {
            // Get existing tags
            IEnumerable<Tag> tags = _dbContext.Tags.ToList<Tag>();

            // Check if tag already exists
            if (tags.FirstOrDefault(e => e.ID == tag.ID) == null)
            {
                _dbContext.Tags.Add(tag);
                _dbContext.SaveChanges();
            }
        }
        public void DeleteTag(Tag tag)
        {
            // Get existing tags
            IEnumerable<Tag> tags = _dbContext.Tags.ToList<Tag>();

            // Check if tag exists
            if (tags.FirstOrDefault(e => e.ID == tag.ID) != null)
            {
                // Delete tag
                _dbContext.Tags.Remove(tag);
                _dbContext.SaveChanges();
            }
        }

        public void TagProject(Project project, Tag tag)
        {
            // Get existing projects and tags
            IEnumerable<Project> projects = _dbContext.Projects.ToList<Project>();
            IEnumerable<Tag> tags = _dbContext.Tags.ToList<Tag>();

        }

        //Comment functions
        public Comment WriteComment(Comment comment)
        {
            EntityEntry<Comment> e = _dbContext.Comments.Add(comment);
            Comment c = e.Entity;
            _dbContext.SaveChanges();
            return c;
        }
        public void DeleteComment(Comment comment)
        {
            // Get all comments
            IEnumerable<Comment> comments = _dbContext.Comments.ToList<Comment>();

            // Check if comment exists
            if (comments.FirstOrDefault(e => e.ID == comment.ID) != null)
            {
                // Delete comment
                Comment commentToDelete = comments.FirstOrDefault(e => e.ID == comment.ID);
                _dbContext.Comments.Remove(commentToDelete);
                _dbContext.SaveChanges();
            }
        }
        public Comment GetCommentByID(int id)
        {
            Comment comment = _dbContext.Comments.FirstOrDefault(e => e.ID == id);
            return comment;
        }
        public IEnumerable<Comment> GetAllCommentsByID(int num)
        {
            IEnumerable<Comment> comments = _dbContext.Comments.ToList<Comment>();
            IEnumerable<Comment> items = comments.Where(e => e.ProjectID == num);
            return items;
        }
        public IEnumerable<Comment> GetComments()
        {
            IEnumerable<Comment> comments = _dbContext.Comments.ToList<Comment>();
            return comments;
        }

        public string GetFilePath(string Filename)
        {
            string path = Directory.GetCurrentDirectory();
            string imgDir = Path.Combine(path, "img/Projects");
            return imgDir;
        }
        //public async void UploadProjectImage(IFormFile file)
        //{
        //    try
        //    {
        //        var httpClient = new HttpClient();
        //        var multipartFormDataContent = new MultipartFormDataContent();
        //        httpClient.BaseAddress = new Uri(BASE_URL);
        //        var fileContent = new ByteArrayContent(File.ReadAllBytes(fileInfo.FullName));
        //        multipartFormDataContent.Add(fileContent, "file", fileInfo.Name);
        //        return httpClient.PostAsync("upload", multipartFormDataContent);
        //    }
        //    catch
        //    {
        //        return null;
        //    }
        //}
        //Save
        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }
    }
}