using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Capstone_Connect.Model
{
    public class Comment
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public int ProjectID { get; set; }

        [Required]
        public string? FullName { get; set; }

        [Required]
        public string? CommentText { get; set; }
    }
}