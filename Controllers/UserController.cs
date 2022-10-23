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

        [HttpPost("RegisterAdmin")]
        public ActionResult RegisterAdmin(UserInDto admin)
        {
            if (admin.Email == "")
            {
                return Ok("Invalid Email");
            }
            Admin a = _repository.GetAdminByEmail(admin.Email);
            if (a != null)
            {
                return Ok("Email not available.");
            }
            else
            {
                Admin c = new() { Email = admin.Email, Password = admin.Password, FullName = admin.FullName };
                _repository.AddAdmin(c);
                return Ok("User successfully registered");
            }
        }

        // DELETE /webapi/DeleteAdmin/{email}
        [HttpDelete("DeleteAdmin/{email}")]
        public ActionResult DeleteAdmin(string email)
        {
            Admin c = _repository.GetAdminByEmail(email);
            if (c == null)
                return NotFound();
            else
            {
                _repository.DeleteAdmin(email);
                return NoContent();
            }
        }
        // DELETE /webapi/DeleteStudent/{email}
        [HttpDelete("DeleteStudent/{email}")]
        public ActionResult DeleteStudent(string email)
        {
            Student c = _repository.GetStudentByEmail(email);
            if (c == null)
                return NotFound();
            else
            {
                _repository.DeleteStudent(email);
                return NoContent();
            }
        }
        // DELETE /webapi/DeleteVisitor/{email}
        [HttpDelete("DeleteVisitor/{email}")]
        public ActionResult DeleteVisitor(string email)
        {
            Visitor c = _repository.GetVisitorByEmail(email);
            if (c == null)
                return NotFound();
            else
            {
                _repository.DeleteVisitor(email);
                return NoContent();
            }
        }
    }
}