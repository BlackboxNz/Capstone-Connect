using Capstone_Connect.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_Connect.Dtos
{
    public class ProjectInDto
    {
        public string TeamName { get; set; }
        public string ProjectName { get; set; }
        public string? Semester { get; set; }
        public string? ProjectOverview { get; set; }
        public string? Approach { get; set; }
        public string? FinalThoughts { get; set; }
        public string? Img { get; set; }
        public string? Video { get; set; }

        public ICollection<Tag>? Tags { get; set; }
    }
}
