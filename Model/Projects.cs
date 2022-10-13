using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Capstone_Connect.Model
{
	public class Projects
	{
    [Key]
    public int ID { get; set; }
    [Required]
    public string TeamName { get; set; }
    public string ProjectName { get; set; }
    public string Description { get; set; }
    public string Brief { get; set; }
    public string Img { get; set; } 
    public string Video { get; set; }  

    public ICollection<Tags> Tags { get; set; }

    // Team members
    public ICollection<Users> Users { get; set; }
    // Users that have liked the project.
    // Should we change this to number of likes? Then keep the liked projects on the user side?
    // public ICollection<Users> LikedBy { get; set; }
    public ICollection<Comments> Comments { get; set; }

}
}
