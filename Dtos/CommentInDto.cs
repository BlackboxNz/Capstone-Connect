using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_Connect.Dtos
{
    public class CommentInputDto
    {
        public int ID { get; set; }
        [Required]
        public string Comment { get; set; }
        [Required]
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}