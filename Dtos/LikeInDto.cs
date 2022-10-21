using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_Connect.Dtos
{
    public class LikeInDto
    {
        public int ProjectID { get; set; }
        public int UserID { get; set; }
    }
}