using System;
using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace FitnessAPI.Controllers
{
    public class FallBack : Controller
    {
        /// <summary>
        /// Returns the index.html page 
        /// </summary>
        public IActionResult Index()
        {
            return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "index.html"), "text/HTML");
        }
    }
}
