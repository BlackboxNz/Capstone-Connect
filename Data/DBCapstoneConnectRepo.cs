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
        //General functions
        public IEnumerable<Project> GetAllProjects()
        {
            IEnumerable<Project> project = _dbContext.Projects.ToList<Project>();
            return project;
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
        
        //Visitor based project functions
        public void LikeProject(Project project, User user)
        {
        }

        //Admin based project functions
        public void AwardProject(Project project, Tag tag)
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

        //User Functions
        public bool ValidLogin(string email, string password, string userlevel)
        {
            User user = _dbContext.Users.Where(u => u.Email == email && u.Password == password && u.UserLevel == userlevel).FirstOrDefault();
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
            User user = _dbContext.Users.FirstOrDefault(e => e.Email == email);
            return user;
        }
        public User RegisterUser(User user)
        {
            EntityEntry<User> e = _dbContext.Users.Add(user);
            User c = e.Entity;
            _dbContext.SaveChanges();
            return c;
        }
        public void DeleteUser(User user)
        {
            // Get all comments
            IEnumerable<User> users = _dbContext.Users.ToList<User>();

            // Check if comment exists
            if (users.FirstOrDefault(e => e.Email == user.Email) != null)
            {
                // Delete comment
                User userToDelete = users.FirstOrDefault(e => e.Email == user.Email);
                _dbContext.Users.Remove(userToDelete);
                _dbContext.SaveChanges();
            }
        }


        //Team Functions
        public Team AddTeam(Team team)
        {
            EntityEntry<Team> e = _dbContext.Teams.Add(team);
            Team c = e.Entity;
            _dbContext.SaveChanges();
            return c;
        }
        public IEnumerable<Team> GetAllTeams()
        {
            IEnumerable<Team> team = _dbContext.Teams.ToList<Team>();
            return team;
        }
        public Team GetTeamByID(int id)
        {
            Team team = _dbContext.Teams.FirstOrDefault(e => e.ID == id);
            return team;
        }
        public void DeleteTeam(int id)
        {
            // Get existing teams
            IEnumerable<Team> teams = _dbContext.Teams.ToList<Team>();

            // Check if team exists
            Team team = teams.FirstOrDefault(e => e.ID == id);
            if (team != null)
            {
                // Delete team
                _dbContext.Teams.Remove(team);
                _dbContext.SaveChanges();
            }
        }

        public void AddTag(Tag tag)
        {
            // Get existing tags
            IEnumerable<Tag> tags = _dbContext.Tags.ToList<Tag>();

            // Check if tag already exists
            if (tags.FirstOrDefault(e => e.TagId == tag.TagId) == null)
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
        //Save
        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }
    }
}