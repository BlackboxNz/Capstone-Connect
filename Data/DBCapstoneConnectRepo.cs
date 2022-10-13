using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Globalization;
using Capstone_Connect.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections;

namespace Capstone_Connect.Data
{
    public class DBCapstoneConnectRepo : ICapstoneConnectRepo
    {
        private readonly CapstoneConnectDBContext _dbContext;

        public DBCapstoneConnectRepo(CapstoneConnectDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool ValidLogin(string email, string password, string userlevel)
        {
            Users user = _dbContext.Users.Where(u => u.email == email && u.Password == password && u.UserLevel == userlevel).FirstOrDefault();
            if (user == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        
        public User GetUserByEmail(string email)
        {
            User user = _dbContext.User.FirstOrDefault(e => e.email == email);
            return user;
        }

        public User Register(User user)
        {
            IEnumerable<User> users = _dbContext.User.ToList();
            if (users.FirstOrDefault(e => e.UserName == user.UserName) != null)
            {
                return null;
            }
            else
            {
                EntityEntry<User> e = _dbContext.User.Add(user);
                User u = e.Entity;
                _dbContext.SaveChanges();
                return u;
            }
        }

        //General functions
        public IEnumerable<Project> GetAllProject()
        {
            IEnumerable<Project> project = _dbContext.Project.ToList<Project>();
            return project;
        }
        public Project GetProjectByID(int id)
        {
            Project project = _dbContext.Project.FirstOrDefault(e => e.ID == id);
            return project;
        }
        public Project AddProject(Project project)
        {
            EntityEntry<Project> e = _dbContext.Project.Add(project);
            Project c = e.Entity;
            _dbContext.SaveChanges();
            return c;
        }

        //Student based project functions
        public void SubmitProject(Project project)
        {

        }
        
        //Visitor based project functions
        public void LikeProject(Project project, User user)
        {
        }

        public Comment WriteComment(Comment comment)
        {
            EntityEntry<Comment> e = _dbContext.Comment.Add(comment);
            Comment c = e.Entity;
            _dbContext.SaveChanges();
            return c;
        }

        //Admin based project functions
        public void AwardProject(Project project, Tags tag)
        {

        }
        public void ApproveProject(Project project)
        {

        }
        public void RejectProject(Project project)
        {

        }
        public void DeleteProject(int id)
        {
            // Get existing projects
            IEnumerable<Project> projects = _dbContext.Project.ToList<Project>();

            // Check if project exists
            Project project = projects.FirstOrDefault(e => e.ID == id);
            if (project != null)
            {
                // Delete project
                _dbContext.Project.Remove(project);
                _dbContext.SaveChanges();
            }
        }

        //User Functions
        public bool ValidLogin(string Email, string password)
        {
            Users c = _dbContext.Users.FirstOrDefault(e => e.Email == Email && e.Password == password);
            if (c == null)
                return false;
            else
                return true;
        }
        public Users GetUserByEmail(string Email)
        {
            Users user = _dbContext.Users.FirstOrDefault(e => e.Email == Email);
            return user;
        }
        public Users RegisterUser(Users user)
        {
            EntityEntry<Users> e = _dbContext.Users.Add(user);
            Users c = e.Entity;
            _dbContext.SaveChanges();
            return c;
        }
        public void DeleteUser(Users user)
        {
            // Get all comments
            IEnumerable<Users> users = _dbContext.Users.ToList<Users>();

            // Check if comment exists
            if (users.FirstOrDefault(e => e.Email == user.Email) != null)
            {
                // Delete comment
                Users userToDelete = users.FirstOrDefault(e => e.Email == user.Email);
                _dbContext.Users.Remove(userToDelete);
                _dbContext.SaveChanges();
            }
        }


        //Team Functions
        public Teams AddTeam(Teams team)
        {
            EntityEntry<Teams> e = _dbContext.Teams.Add(team);
            Teams c = e.Entity;
            _dbContext.SaveChanges();
            return c;
        }
        public IEnumerable<Teams> GetAllTeams()
        {
            IEnumerable<Teams> team = _dbContext.Teams.ToList<Teams>();
            return team;
        }
        public Teams GetTeamByID(int id)
        {
            Teams team = _dbContext.Teams.FirstOrDefault(e => e.ID == id);
            return team;
        }
        public void DeleteTeam(int id)
        {
            // Get existing teams
            IEnumerable<Teams> teams = _dbContext.Teams.ToList<Teams>();

            // Check if team exists
            Teams team = teams.FirstOrDefault(e => e.ID == id);
            if (team != null)
            {
                // Delete team
                _dbContext.Teams.Remove(team);
                _dbContext.SaveChanges();
            }
        }

        //User Functions
        public bool ValidLogin(string Email, string password)
        {
            Users c = _dbContext.Users.FirstOrDefault(e => e.Email == Email && e.Password == password);
            if (c == null)
                return false;
            else
                return true;
        }
        public Users GetUserByEmail(string Email)
        {
            Users user = _dbContext.Users.FirstOrDefault(e => e.Email == Email);
            return user;
        }
        public Users RegisterUser(Users user)
        {
            EntityEntry<Users> e = _dbContext.Users.Add(user);
            Users c = e.Entity;
            _dbContext.SaveChanges();
            return c;
        }
        public void DeleteUser(Users user)
        {
            // Get all users
            IEnumerable<Users> users = _dbContext.Users.ToList<Users>();

            // Check if user exists
            if (users.FirstOrDefault(e => e.Email == user.Email) != null)
            {
                // Delete user
                Users userToDelete = users.FirstOrDefault(e => e.Email == user.Email);
                _dbContext.Users.Remove(userToDelete);
                _dbContext.SaveChanges();
            }
        }


        //Team Functions
        public Teams AddTeam(Teams team)
        {
            EntityEntry<Teams> e = _dbContext.Teams.Add(team);
            Teams c = e.Entity;
            _dbContext.SaveChanges();
            return c;
        }
        public IEnumerable<Teams> GetAllTeams()
        {
            IEnumerable<Teams> team = _dbContext.Teams.ToList<Teams>();
            return team;
        }
        public Teams GetTeamByID(int id)
        {
            Teams team = _dbContext.Teams.FirstOrDefault(e => e.ID == id);
            return team;
        }
        public void DeleteTeam(int id)
        {
            // Get existing teams
            IEnumerable<Teams> teams = _dbContext.Teams.ToList<Teams>();

            // Check if team exists
            Teams team = teams.FirstOrDefault(e => e.ID == id);
            if (team != null)
            {
                // Delete team
                _dbContext.Teams.Remove(team);
                _dbContext.SaveChanges();
            }
        }

        public void AddTag(Tags tag)
        {
            // Get existing tags
            IEnumerable<Tags> tags = _dbContext.Tags.ToList<Tags>();

            // Check if tag already exists
            if (tags.FirstOrDefault(e => e.TagId == tag.TagId) == null)
            {
                _dbContext.Tags.Add(tag);
                _dbContext.SaveChanges();
            }
        }

        public void DeleteTag(Tags tag)
        {
            // Get existing tags
            IEnumerable<Tags> tags = _dbContext.Tags.ToList<Tags>();

            // Check if tag exists
            if (tags.FirstOrDefault(e => e.TagId == tag.TagId) != null)
            {
                // Delete tag
                _dbContext.Tags.Remove(tag);
                _dbContext.SaveChanges();
            }
        }

        public void TagProject(Project project, Tags tag)
        {
            // Get existing projects and tags
            IEnumerable<Project> projects = _dbContext.Project.ToList<Project>();
            IEnumerable<Tags> tags = _dbContext.Tags.ToList<Tags>();

        }



        //Comment functions
        public Comments WriteComment(Comments comment)
        {
            EntityEntry<Comments> e = _dbContext.Comments.Add(comment);
            Comments c = e.Entity;
            _dbContext.SaveChanges();
            return c;
        }
        public void DeleteComment(Comment comment)
        {
            // Get all comments
            IEnumerable<Comment> comments = _dbContext.Comment.ToList<Comment>();

            // Check if comment exists
            if (comments.FirstOrDefault(e => e.ID == comment.ID) != null)
            {
                // Delete comment
                Comment commentToDelete = comments.FirstOrDefault(e => e.ID == comment.ID);
                _dbContext.Comment.Remove(commentToDelete);
                _dbContext.SaveChanges();
            }
        }
        //Save
        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }
    }
}