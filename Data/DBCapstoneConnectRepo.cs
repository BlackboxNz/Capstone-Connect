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
        
        //Visitor based project functions
        public void LikeProject(Project project, Visitor user)
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

        //Visitor Functions
        public Visitor GetVisitorByEmail(string email)
        {
            Visitor user = _dbContext.Visitors.FirstOrDefault(e => e.Email == email);
            return user;
        }
        public Visitor RegisterVisitor(Visitor user)
        {
            EntityEntry<Visitor> e = _dbContext.Visitors.Add(user);
            Visitor c = e.Entity;
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
            Visitor user = _dbContext.Visitors.Where(e => e.Email == email && e.Password == password).FirstOrDefault();
            if (user == null)
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
            Visitor user = _dbContext.Visitors.Where(e => e.Email == email && e.Password == password).FirstOrDefault();
            if (user == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        public string GetAuth()
        {
            return "Authorised";
        }

        public void DeleteUser(Visitor user)
        {
            // Get all comments
            IEnumerable<Visitor> users = _dbContext.Visitors.ToList<Visitor>();

            // Check if comment exists
            if (users.FirstOrDefault(e => e.Email == user.Email) != null)
            {
                // Delete comment
                Visitor userToDelete = users.FirstOrDefault(e => e.Email == user.Email);
                _dbContext.Visitors.Remove(userToDelete);
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

        //Save
        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }
    }
}