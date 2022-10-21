using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Capstone_Connect.Model;
using Capstone_Connect.Data;
using Capstone_Connect.Dtos;


namespace Capstone_Connect.Controllers
{
    [Route("webapi")]
    [ApiController]
    public class LikeController : Controller
    {
        private readonly ICapstoneConnectRepo _repository;
        public LikeController(ICapstoneConnectRepo repository)
        {
            _repository = repository;
        }

        [HttpGet("LikeProject")]
        public ActionResult LikeProject(int projectID, string visitorEmail)
        {
            _repository.LikeProject(projectID, visitorEmail);
            return Ok();
        }
    }
}
