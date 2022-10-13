using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Sockets;
using System.Net;
using Capstone_Connect.Model;
using Capstone_Connect.Data;
using Capstone_Connect.Dtos;
using System.IO;
using System.Drawing;
using Capstone_Connect.Helper;
using System.Drawing.Imaging;
using System.Collections;

namespace Capstone_Connect.Controllers
{
    [Route("webapi")]
    [ApiController]
    public class ProjectsController : Controller
    {
        private readonly ICapstoneConnectRepo _repository;
        public ProjectsController(ICapstoneConnectRepo repository)
        {
            _repository = repository;
        }
        // POST /webapi/AddProject
        [HttpPost("AddProject")]
        public ActionResult<ProjectOutDto> AddProject(ProjectInDto project)
        {
            Projects p = new() { TeamName = project.TeamName, ProjectName = project.ProjectName };
            Projects addedProject = _repository.AddProject(p);
            ProjectOutDto po = new ProjectOutDto { ID = addedProject.ID, TeamName = addedProject.TeamName, ProjectName = addedProject.ProjectName, Description = addedProject.Description, Brief = addedProject.Brief, Img = addedProject.Img, Video = addedProject.Video, Tags = addedProject.Tags };
            return CreatedAtAction(nameof(GetProject), new { id = po.ID }, po);
        }

        // PUT /webapi/UpdateProject/{id}
        [HttpPut("UpdateProject/{id}")]
        public ActionResult UpdateProject(int id, ProjectInDto project)
        {
            Projects c = _repository.GetProjectByID(id);
            if (c == null)
                return NotFound();
            else
            {
                c.TeamName = project.TeamName;
                c.ProjectName = project.ProjectName;
                c.Description = project.Description;
                c.Brief = project.Brief;
                c.Img = project.Img;
                c.Video = project.Video;
                c.Tags = project.Tags;  


                _repository.SaveChanges();
                return NoContent();
            }
        }

        // GET /webapi/GetAllProjects
        [HttpGet("GetAllProjects")]
        public ActionResult<IEnumerable<ProjectOutDto>> GetAllProjects()
        {
            IEnumerable<Projects> project = _repository.GetAllProjects();
            IEnumerable<ProjectOutDto> c = project.Select(e => new ProjectOutDto { ID = e.ID, TeamName = e.TeamName, ProjectName = e.ProjectName, Description = e.Description, Brief = e.Brief, Img = e.Img, Video = e.Video, Tags = e.Tags, Users = e.Users });
            return Ok(c);
        }
        // GET /webapi/GetProject/{ID}
        [HttpGet("GetProject/{ID}")]
        public ActionResult<ProjectOutDto> GetProject(int id)
        {
            Projects project = _repository.GetProjectByID(id);
            if (project == null)
                return NotFound();
            else
            {
                ProjectOutDto c = new() { ID = project.ID, TeamName = project.TeamName, ProjectName = project.ProjectName, Description = project.Description, Brief = project.Brief, Img = project.Img, Video = project.Video, Tags = project.Tags, Users = project.Users, Comments = project.Comments };
                return Ok(c);
            }

        }
        // DELETE /webapi/DeleteProject/{id}
        [HttpDelete("DeleteProject/{id}")]
        public ActionResult DeleteProject(int id)
        {
            Projects c = _repository.GetProjectByID(id);
            if (c == null)
                return NotFound();
            else
            {
                _repository.DeleteProject(id);
                return NoContent();
            }
        }
    }
}
