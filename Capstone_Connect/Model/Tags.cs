using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Capstone_Connect.Model
{
    public class Tags
    {
        [Key]
        public string TagId { get; set; }

        public string TagName { get; set; }

        public ICollection<Projects> Projects { get; set; }

        public bool isAward { get; set; }
    }
}