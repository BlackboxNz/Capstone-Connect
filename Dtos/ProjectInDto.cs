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
        public string Description { get; set; }
        public string Brief { get; set; }
        public string Img { get; set; }
        public string Video { get; set; }

        public ICollection<Tag> Tags { get; set; }
    }
}
