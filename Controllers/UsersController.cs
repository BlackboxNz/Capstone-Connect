using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Capstone_Connect.Data;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Capstone_Connect.Dtos;
using Capstone_Connect.Model;

namespace Capstone_Connect.Controllers
{
    [Route("api")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly ICapstoneConnectRepo _repository;
        public UsersController(ICapstoneConnectRepo repository)
        {
            _repository = repository;
        }

        [HttpPost("Register")]
        public ActionResult Register(UserInDto user)
        {
            if (user.Email == "")
            {
                return Ok("Invalid Email");
            }
            User t = _repository.GetUserByEmail(user.Email);
            if (t != null)
            {
                return Ok("Email not available.");
            }
            else
            {
                User c = new User { Email = user.Email, Password = user.Password };
                User addedUser = _repository.RegisterUser(c);
                return Ok("User successfully registered");
            }

        }
    }
}