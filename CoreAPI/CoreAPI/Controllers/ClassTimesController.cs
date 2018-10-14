using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoreAPI.Models;

namespace CoreAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/ClassTimes")]
    public class ClassTimesController : Controller
    {
        private readonly ClassTimesContext _context;

        public ClassTimesController(ClassTimesContext context)
        {
            _context = context;
        }

        // GET: api/ClassTimes
        [HttpGet]
        public IEnumerable<ClassTimes> GetClassTimes()
        {
            return _context.ClassTimes;
        }

        // GET: api/ClassTimes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetClassTimes([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var classTimes = await _context.ClassTimes.SingleOrDefaultAsync(m => m.Id == id);

            if (classTimes == null)
            {
                return NotFound();
            }

            return Ok(classTimes);
        }

        // PUT: api/ClassTimes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClassTimes([FromRoute] int id, [FromBody] ClassTimes classTimes)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != classTimes.Id)
            {
                return BadRequest();
            }

            _context.Entry(classTimes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClassTimesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ClassTimes
        [HttpPost]
        public async Task<IActionResult> PostClassTimes([FromBody] ClassTimes classTimes)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ClassTimes.Add(classTimes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClassTimes", new { id = classTimes.Id }, classTimes);
        }

        // DELETE: api/ClassTimes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClassTimes([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var classTimes = await _context.ClassTimes.SingleOrDefaultAsync(m => m.Id == id);
            if (classTimes == null)
            {
                return NotFound();
            }

            _context.ClassTimes.Remove(classTimes);
            await _context.SaveChangesAsync();

            return Ok(classTimes);
        }

        private bool ClassTimesExists(int id)
        {
            return _context.ClassTimes.Any(e => e.Id == id);
        }
    }
}