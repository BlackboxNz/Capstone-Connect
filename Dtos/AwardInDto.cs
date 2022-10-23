using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_Connect.Dtos
{
    public class AwardInDto
    {
        public string ProjectName { get; set; }
        public bool ClientWin { get; set; }
        public bool ClientTwo { get; set; }
        public bool PeopleWin { get; set; }
        public bool PeopleTwo { get; set; }
    }
}