using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Pusaka.Web.Controllers
{
    public class MissionController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}