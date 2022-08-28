using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Capstone_Connect.Model
{
    public class Project
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public string TeamName { get; set; }

        [Required]
        public string ProjectName { get; set; }

        [Required]
        public string Description { get; set; }
        
        public ICollection<Tag> Tags {get; set; }

        // Users that have liked the project.
        public ICollection<Users> LikedBy { get; set; }
        
    }
}
