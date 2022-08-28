using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Globalization;
using Capstone_Connect.Model;

namespace Capstone_Connect.Data
{
    public class DBCapstoneConnectRepo: ICapstoneConnectRepo
    {
        private readonly CapstoneConnectDBContext _dbContext;

        public DBCapstoneConnectRepo(CapstoneConnectDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        //General functions
        public IEnumerable<Project> GetAllProjects()
        {
            IEnumerable<Project> projects = _dbContext.Projects.ToList<Project>();
            return projects;
        }

        public Project GetProjectByID(int id)
        {
            Project project = _dbContext.Projects.FirstOrDefault(e => e.ID == id);
            return project;
        }

        public void RegisterUser (User user)
        {
            // Get existing users
            IEnumerable<Student> students = _dbContext.Students.ToList<Student>();
            IEnumerable<Visitor> visitors = _dbContext.Visitors.ToList<Visitor>();
            IEnumerable<Admin> admins = _dbContext.Admins.ToList<Admin>();
            
            // Check if user is already registered
            if (students.FirstOrDefault(e => e.Email == user.Email) != null)
            {
                return null;
            }
            else if (visitors.FirstOrDefault(e => e.Email == user.Email) != null)
            {
                return null;
            }
            else if (admins.FirstOrDefault(e => e.Email == user.Email) != null)
            {
                return null;
            }
            

            else
            {
                
            }
        }


        //Student functions
        public void SubmitProject(Project project)
        {
            
        }


        //Visitor functions
        public void LikeProject(Project project, User user)
        {
            // Get existing projects
            IEnumerable<Project> projects = _dbContext.Projects.ToList<Project>();

            // Get existing users
            IEnumerable<Student> students = _dbContext.Students.ToList<Student>();
            IEnumerable<Visitor> visitors = _dbContext.Visitors.ToList<Visitor>();
            IEnumerable<Admin> admins = _dbContext.Admins.ToList<Admin>();
            
            // Check if project exists and user exists, then 'like' association
            if (projects.FirstOrDefault(e => e.ID == project.ID) != null)
            {
                if (students.FirstOrDefault(e => e.Email == user.Email) != null)
                {
                    Student student = students.FirstOrDefault(e => e.Email == user.Email);
                    student.LikedProjects.Add(project);
                    _dbContext.SaveChanges();
                }
                else if (visitors.FirstOrDefault(e => e.Email == user.Email) != null)
                {
                    Visitor visitor = visitors.FirstOrDefault(e => e.Email == user.Email);
                    visitor.LikedProjects.Add(project);
                    _dbContext.SaveChanges();
                }
                else if (admins.FirstOrDefault(e => e.Email == user.Email) != null)
                {
                    Admin admin = admins.FirstOrDefault(e => e.Email == user.Email);
                    admin.LikedProjects.Add(project);
                    _dbContext.SaveChanges();
                }
            }
        }

        public void WriteComment(Comment comment)
        {
            
        }

        //Admin functions
        public void ApproveProject(Project project)
        {
            
        }

        public void RejectProject(Project project)
        {
            
        }

        public void DeleteProject(Project project)
        {
            // Get existing projects
            IEnumerable<Project> projects = _dbContext.Projects.ToList<Project>();

            // Check if project exists
            if (projects.FirstOrDefault(e => e.ID == project.ID) != null)
            {
                // Delete project
                _dbContext.Projects.Remove(project);
                _dbContext.SaveChanges();
            }
        }

        public void AddTag(Tag tag)
        {
            // Get existing tags
            IEnumerable<Tag> tags = _dbContext.Tags.ToList<Tag>();

            // Check if tag already exists
            if (tags.FirstOrDefault(e => e.TagId == tag.TagId) != null)
            {
                return null;
            }
            else
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
            if (tags.FirstOrDefault(e => e.TagId == tag.TagId) != null)
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

            if (projects.FirstOrDefault(e => e.ID == project.ID) != null)
            {
                if (tags.FirstOrDefault(e => e.ID == tag.ID) != null)
                {
                    project.TagID = tag.ID;
                    tag.Projects.Add(project);
                    _dbContext.SaveChanges();
                }
            }
        }

        public void ApproveAdmin(User user)
        {
            // Get existing users
            IEnumerable<Student> students = _dbContext.Students.ToList<Student>();
            IEnumerable<Visitor> visitors = _dbContext.Visitors.ToList<Visitor>();
            IEnumerable<Admin> admins = _dbContext.Admins.ToList<Admin>();
        }

        public void DeleteUser(User user)
        {
            // Get existing users
            IEnumerable<Student> students = _dbContext.Students.ToList<Student>();
            IEnumerable<Visitor> visitors = _dbContext.Visitors.ToList<Visitor>();
            IEnumerable<Admin> admins = _dbContext.Admins.ToList<Admin>();

            // Check if user exists, then delete
            if (students.FirstOrDefault(e => e.Email == user.Email) != null)
            {
                Student student = students.FirstOrDefault(e => e.Email == user.Email);
                _dbContext.Students.Remove(student);
                _dbContext.SaveChanges();
            }
            else if (visitors.FirstOrDefault(e => e.Email == user.Email) != null)
            {
                Visitor visitor = visitors.FirstOrDefault(e => e.Email == user.Email);
                _dbContext.Visitors.Remove(visitor);
                _dbContext.SaveChanges();
            }
            else if (admins.FirstOrDefault(e => e.Email == user.Email) != null)
            {
                Admin admin = admins.FirstOrDefault(e => e.Email == user.Email);
                _dbContext.Admins.Remove(admin);
                _dbContext.SaveChanges();
            }
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

    }
}