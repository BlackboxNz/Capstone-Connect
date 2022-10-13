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
    public class TeamssController : Controller
    {
        private readonly ICapstoneConnectRepo _repository;
        public TeamssController(ICapstoneConnectRepo repository)
        {
            _repository = repository;
        }
        // POST /webapi/AddTeam
        [HttpPost("AddTeam")]
        public ActionResult<ProjectOutDto> AddTeam(TeamInDto team)
        {
            Team c = new() { TeamName = team.TeamName, Members = team.Members };
            Team addedTeam = _repository.AddTeam(c);
            TeamOutDto co = new TeamOutDto { ID = addedTeam.ID, TeamName = addedTeam.TeamName, Members = addedTeam.Members };
            return CreatedAtAction(nameof(GetTeam), new { id = co.ID }, co);
        }

        // PUT /webapi/UpdateProject/{id}
        [HttpPut("UpdateTeam/{id}")]
        public ActionResult UpdateTeam(int id, TeamInDto team)
        {
            Team c = _repository.GetTeamByID(id);
            if (c == null)
                return NotFound();
            else
            {
                c.TeamName = team.TeamName;
                c.Members = team.Members;


                _repository.SaveChanges();
                return NoContent();
            }
        }

        // GET /webapi/GetAllTeams
        [HttpGet("GetAllTeams")]
        public ActionResult<IEnumerable<TeamOutDto>> GetAllTeams()
        {
            IEnumerable<Team> team = _repository.GetAllTeams();
            IEnumerable<TeamOutDto> c = team.Select(e => new TeamOutDto { ID = e.ID, TeamName = e.TeamName, Members = e.Members });
            return Ok(c);
        }
        // GET /webapi/GetTeam/{ID}
        [HttpGet("GetTeam/{ID}")]
        public ActionResult<TeamOutDto> GetTeam(int id)
        {
            Team team = _repository.GetTeamByID(id);
            if (team == null)
                return NotFound();
            else
            {
                TeamOutDto c = new() { ID = team.ID, TeamName = team.TeamName, Members = team.Members };
                return Ok(c);
            }

        }
        // DELETE /webapi/DeleteTeam/{id}
        [HttpDelete("DeleteTeam/{id}")]
        public ActionResult DeleteTeam(int id)
        {
            Team c = _repository.GetTeamByID(id);
            if (c == null)
                return NotFound();
            else
            {
                _repository.DeleteTeam(id);
                return NoContent();
            }
        }
    }
}