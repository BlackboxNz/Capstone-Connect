using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Capstone_Connect.Model;

namespace Capstone_Connect.Dtos
{
    public class UserOutDto
    {
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public ICollection<Project> LikedProjects { get; set; }
    }
}
