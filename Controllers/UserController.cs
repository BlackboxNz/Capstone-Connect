﻿using System;
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

        [Authorize(AuthenticationSchemes = "AdminScheme")]
        [Authorize(Policy = "VisitorMinimum")]
        [HttpGet("GetAuth")]
        public ActionResult<string> GetAuth() => Ok(_repository.GetAuth());

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
                Visitor c = new Visitor { Email = visitor.Email, Password = visitor.Password, FullName = visitor.FullName};
                Visitor addedUser = _repository.RegisterVisitor(c);
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
                Student c = new Student { Email = student.Email, Password = student.Password, FullName = student.FullName };
                Student addedUser = _repository.RegisterStudent(c);
                return Ok("User successfully registered");
            }
        }
    }
}