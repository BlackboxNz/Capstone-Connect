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

        [HttpPost("LikeProject")]
        public ActionResult LikeProject(LikeInDto like)
        {
            _repository.LikeProject(like.ProjectID, like.UserType, like.UserID);
            return Ok();
        }

        [HttpPost("GetLikedProjects")]
        public ActionResult GetLikedProjects(LikeInDto like)
        {
            return Ok(_repository.GetLikedProjects(like.UserType, like.UserID));
        }
    }
}
