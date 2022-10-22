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
        [HttpGet("GetProjectComments/{id}")]
        public ActionResult<IEnumerable<CommentOutDto>> GetProjectComments(int id)
        {
            
            IEnumerable<Comment> comments = _repository.GetAllCommentsByID(id);
            IEnumerable<CommentOutDto> c = comments.Select(e => new CommentOutDto { ID = e.ID, ProjectID = e.ProjectID, CommentText = e.CommentText, FullName = e.FullName });
            return Ok(c);
            

        }
        [HttpGet("GetComments")]
        public ActionResult<IEnumerable<ProjectOutDto>> GetComments()
        {
            IEnumerable<Comment> comments = _repository.GetComments();
            IEnumerable<CommentOutDto> c = comments.Select(e => new CommentOutDto { ID = e.ID, ProjectID = e.ProjectID, CommentText = e.CommentText, FullName = e.FullName });
            return Ok(c);
        }

    }
}
