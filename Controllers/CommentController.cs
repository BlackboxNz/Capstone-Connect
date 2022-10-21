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
    public class CommentController : Controller
    {
        private readonly ICapstoneConnectRepo _repository;
        public CommentController(ICapstoneConnectRepo repository)
        {
            _repository = repository;
        }
        [HttpPost("WriteComment")]
        //public ActionResult<CommentsOutDto> WriteComment(CommentInDto comment)
        public void WriteComment(CommentInDto comment)
        {
            Comment c = new() { ProjectID = comment.ProjectID, CommentText = comment.CommentText, FullName = comment.FullName };

            Comment addedComment = _repository.WriteComment(c);
            CommentOutDto co = new() { ProjectID = addedComment.ProjectID, CommentText = addedComment.CommentText, FullName = addedComment.FullName };
            //return
        }
    }
}
