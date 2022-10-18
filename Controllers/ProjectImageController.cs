using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Capstone_Connect.Controllers
{
    [Route("webapi")]
    [ApiController]
    public class ProjectImageController : Controller
    {
        [HttpGet("GetProjectImage/{id}")]
        public ActionResult GetItemPhoto(string id)
        {
            string path = Directory.GetCurrentDirectory();
            string imgDir = Path.Combine(path, "img/Projects");
            string fileName1 = Path.Combine(imgDir, id + ".png");
            string fileName2 = Path.Combine(imgDir, id + ".jpg");
            string fileName3 = Path.Combine(imgDir, id + ".gif");
            string respHeader = "";
            string fileName = "";
            if (System.IO.File.Exists(fileName1))
            {
                respHeader = "image/png";
                fileName = fileName1;
            }
            else if (System.IO.File.Exists(fileName2))
            {
                respHeader = "image/jpeg";
                fileName = fileName2;
            }
            else if (System.IO.File.Exists(fileName3))
            {
                respHeader = "image/gif";
                fileName = fileName3;
            }
            else
            {
                respHeader = "image/png";
                fileName = Path.Combine(imgDir, "default.png");
            }


            return PhysicalFile(fileName, respHeader);
        }
    }
}