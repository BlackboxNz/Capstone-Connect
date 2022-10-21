using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_Connect.Dtos
{
    public class CommentInDto
    {
        public int ProjectID { get; set; }
        public string? FullName { get; set; }
        public string? CommentText { get; set; }
    }
}