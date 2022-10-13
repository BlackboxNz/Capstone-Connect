using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Capstone_Connect.Model;

namespace Capstone_Connect.Dtos
{
    public class UsersOutDto
    {
        public int ID { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserLevel { get; set; }
        public ICollection<Projects>? LikedProjects { get; set; }
    }
}
