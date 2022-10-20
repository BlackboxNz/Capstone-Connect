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
    public class MainController : Controller
    {
        private readonly ICapstoneConnectRepo _repository;
        public MainController(ICapstoneConnectRepo repository)
        {
            _repository = repository;
        }

        //    [HttpPost("Register")]
        //    public ActionResult Register(UserInDto user)
        //    {
        //        if (user.Email == "")
        //        {
        //            return Ok("Invalid Email");
        //        }
        //        Visitor t = _repository.GetUserByEmail(user.Email);
        //        if (t != null)
        //        {
        //            return Ok("Email not available.");
        //        }
        //        else
        //        {
        //            Visitor c = new Visitor { Email = user.Email, Password = user.Password, FullName = user.FullName};
        //            Visitor addedUser = _repository.RegisterUser(c);
        //            return Ok("User successfully registered");
        //        }
        //    }

        //    [Authorize(AuthenticationSchemes = "AuthenticationScheme")]
        //    [Authorize(Policy = "VisitorOnly")]
        //    [HttpGet("VisitorLogin")]
        //    public ActionResult<string> GetAuth()
        //    {
        //        return Ok(_repository.GetAuth());
        //    }


        //}
    }
}