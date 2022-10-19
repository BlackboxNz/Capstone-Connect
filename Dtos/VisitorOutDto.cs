using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Capstone_Connect.Model;

namespace Capstone_Connect.Dtos
{
    public class VisitorOutDto
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public ICollection<Project> LikedProjects { get; set; }
    }
}
