using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_Connect.Dtos
{
    public class CommentOutDto
    {
        public int ID { get; set; }
        public int ProjectID { get; set; }
        public string? FullName { get; set; }
        public string? CommentText { get; set; }
    }
}
