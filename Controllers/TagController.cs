using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Capstone_Connect.Model;
using Capstone_Connect.Data;
using Capstone_Connect.Dtos;
using System.Xml.Linq;


namespace Capstone_Connect.Controllers
{
    [Route("webapi")]
    [ApiController]
    public class TagController : Controller
    {
        private readonly ICapstoneConnectRepo _repository;
        public TagController(ICapstoneConnectRepo repository)
        {
            _repository = repository;
        }

        //[HttpPost("AddTags")]
        //public void AddTags(TagsInDto Tags)
        //{
            
        //}
    }
}
