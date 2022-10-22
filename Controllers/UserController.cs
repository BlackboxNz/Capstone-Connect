using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Capstone_Connect.Data;
using Capstone_Connect.Dtos;
using Capstone_Connect.Model;

namespace Capstone_Connect.Controllers
{
    [Route("webapi")]
    [ApiController]
    public class VisitorController : Controller
    {
        private readonly ICapstoneConnectRepo _repository;
        public VisitorController(ICapstoneConnectRepo repository)
        {
            _repository = repository;
        }

        [Authorize(AuthenticationSchemes = "AuthScheme")]
        [Authorize(Policy = "VisitorMinimum")]
        [HttpGet("GetAuth/{email}")]
        public ActionResult<string> GetAuth(string email) => Ok(_repository.GetAuth(email));

        [HttpPost("RegisterVisitor")]
        public ActionResult RegisterVisitor(UserInDto visitor)
        {
            if (visitor.Email == "")
            {
                return Ok("Invalid Email");
            }
            Visitor v = _repository.GetVisitorByEmail(visitor.Email);
            if (v != null)
            {
                return Ok("Email not available.");
            }
            else
            {
                Visitor c = new() { Email = visitor.Email, Password = visitor.Password, FullName = visitor.FullName};
                _repository.RegisterVisitor(c);
                return Ok("User successfully registered");
            }
        }

        [HttpPost("RegisterStudent")]
        public ActionResult RegisterStudent(UserInDto student)
        {
            if (student.Email == "")
            {
                return Ok("Invalid Email");
            }
            Student s = _repository.GetStudentByEmail(student.Email);
            if (s != null)
            {
                return Ok("Email not available.");
            }
            else
            {
                Student c = new() { Email = student.Email, Password = student.Password, FullName = student.FullName};
                _repository.RegisterStudent(c);
                return Ok("User successfully registered");
            }
        }
    }
}