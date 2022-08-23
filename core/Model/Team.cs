using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Capstone_Connect.Model
{
    public class Team
    {
        [Key]
        public int ID { get; set; }
        public string TeamName{ get; set; }
        public string ProjectName { get; set; }
        //public List<Student> TeamMembers { get; set} Potentially will set up a list of team members (Giving them access to change projects, link project to Github account, etc).
        // May need to make a virtual property. 
        
    }
}
