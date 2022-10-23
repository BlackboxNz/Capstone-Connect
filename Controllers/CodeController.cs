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
    public class CodeController : Controller
    {
        private readonly ICapstoneConnectRepo _repository;
        public CodeController(ICapstoneConnectRepo repository)
        {
            _repository = repository;
        }

        [HttpGet("GetCode")]
        public ActionResult<string> GetCode()
        {
            return Ok(_repository.GetCode());
        }

        [HttpPost("SetCode")]
        public ActionResult SetCode(string new_code)
        {
            _repository.SetCode(new_code);
            return Ok();
        }
    }
}
