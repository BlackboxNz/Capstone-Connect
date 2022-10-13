using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace A1.Dtos
{
    public class CommentOutDto
    {
        public string Comment { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
