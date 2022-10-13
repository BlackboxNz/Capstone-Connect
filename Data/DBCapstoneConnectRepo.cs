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


        //Project functions
        public IEnumerable<Projects> GetAllProjects()
        {
            IEnumerable<Projects> project = _dbContext.Projects.ToList<Projects>();
            return project;
        }
        public Projects GetProjectByID(int id)
        {
            Projects project = _dbContext.Projects.FirstOrDefault(e => e.ID == id);
            return project;
        }
        public Projects AddProject(Projects project)
        {
            EntityEntry<Projects> e = _dbContext.Projects.Add(project);
            Projects c = e.Entity;
            _dbContext.SaveChanges();
            return c;
        }

        //Student based project functions
        public void SubmitProject(Projects project)
        {

        }
        //Visitor based project functions
        public void LikeProject(Projects project, Users user)
        {
        }


        //Admin based project functions
        public void AwardProject(Projects project, Tags tag)
        {

        }
        public void ApproveProject(Projects project)
        {

        }
        public void RejectProject(Projects project)
        {

        }
        public void DeleteProject(int id)
        {
            // Get existing projects
            IEnumerable<Projects> projects = _dbContext.Projects.ToList<Projects>();

            // Check if project exists
            Projects project = projects.FirstOrDefault(e => e.ID == id);
            if (project != null)
            {
                // Delete project
                _dbContext.Projects.Remove(project);
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
            else
            {
                
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

        public void TagProject(Projects project, Tags tag)
        {
            // Get existing projects and tags
            IEnumerable<Projects> projects = _dbContext.Projects.ToList<Projects>();
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
        public void DeleteComment(Comments comment)
        {
            // Get all comments
            IEnumerable<Comments> comments = _dbContext.Comments.ToList<Comments>();

            // Check if comment exists
            if (comments.FirstOrDefault(e => e.ID == comment.ID) != null)
            {
                // Delete comment
                Comments commentToDelete = comments.FirstOrDefault(e => e.ID == comment.ID);
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