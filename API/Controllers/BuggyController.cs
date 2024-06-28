using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController :BaseApiController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotFound(){
            return NotFound();
        }
        [HttpGet("unauthorised")]
        public ActionResult GetUnAuthorised(){
            return Unauthorized();
        }
        [HttpGet("bad-request")]
         public ActionResult GetBadRequest(){
            return BadRequest();
        }
        [HttpGet("validation-error")]
        public ActionResult GetValidationError(){
            ModelState.AddModelError("Problem1" , "This is first Error");
            ModelState.AddModelError("Problem2 ", "This is second error");
            return ValidationProblem();
        }

        [HttpGet("server-error")]
        public ActionResult GetServerError(){
            throw  new Exception ("this is server error");
        }

    }
}