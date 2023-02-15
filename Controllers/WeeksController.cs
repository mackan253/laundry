using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using laundry.Data;
using laundry.Models;

namespace laundry.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeeksController : ControllerBase
    {
        private readonly MyDbContext _context;

        public WeeksController(MyDbContext context)
        {
            _context = context;
        }

        // GET: api/Weeks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Week>>> GetWeeks()
        {
            return await _context.Weeks.ToListAsync();
        }

        // GET: api/Weeks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Week>> GetWeek(int id)
        {
            var week = await _context.Weeks.FindAsync(id);

            if (week == null)
            {
                return NotFound();
            }

            return week;
        }

        // GET: api/Weeks/range/1/70
        [HttpGet("range/{startId}/{endId}")]
        public async Task<ActionResult<IEnumerable<Week>>> GetWeeksInRange(int startId, int endId)
        {
            var weeks = await _context.Weeks.Where(w => w.id >= startId && w.id <= endId).ToListAsync();

            if (!weeks.Any())
            {
                return NotFound();
            }

            return weeks;
        }


        // PUT: api/Weeks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWeek(int id, Week week)
        {
            if (id != week.id)
            {
                return BadRequest();
            }

            _context.Entry(week).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WeekExists(id))
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

        // POST: api/Weeks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Week>> PostWeek(Week week)
        {
            _context.Weeks.Add(week);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWeek", new { id = week.id }, week);
        }

        // DELETE: api/Weeks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWeek(int id)
        {
            var week = await _context.Weeks.FindAsync(id);
            if (week == null)
            {
                return NotFound();
            }

            _context.Weeks.Remove(week);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool WeekExists(int id)
        {
            return _context.Weeks.Any(e => e.id == id);
        }
    }
}
