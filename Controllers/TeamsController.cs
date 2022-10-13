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
    public class TeamssController : Controller
    {
        private readonly ICapstoneConnectRepo _repository;
        public TeamssController(ICapstoneConnectRepo repository)
        {
            _repository = repository;
        }
    }
}