using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capstone_Connect.Model;

namespace Capstone_Connect.Dtos
{
    public class ProjectOutDto
    {
        public int ID { get; set; }
        public string? TeamName { get; set; }
        public string? ProjectName { get; set; }
        public string? Semester { get; set; }
        public string? ProjectOverview { get; set; }
        public string? Approach { get; set; }
        public string? FinalThoughts { get; set; }
        public string? Img { get; set; }
        public string? Video { get; set; }

        public ICollection<Tag>? Tags { get; set; }

        // Team members
        public ICollection<Student>? Users { get; set; }
        // Users that have liked the project.
        //public ICollection<User> LikedBy { get; set; }
        public ICollection<Comment>? Comments { get; set; }
    }
}
