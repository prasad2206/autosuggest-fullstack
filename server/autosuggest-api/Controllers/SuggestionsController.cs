using autosuggest_api.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace autosuggest_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SuggestionsController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public SuggestionsController(ApplicationDbContext db)
        {
            _db = db;
        }

        // GET: api/suggestions?q=react
        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] string q)
        {
            if (string.IsNullOrWhiteSpace(q))
                return Ok(Array.Empty<string>());

            // Simple case-insensitive contains search; use EF.Functions.Like for SQL-side filtering
            var query = q.Trim();

            var results = await _db.Suggestions
                .Where(s => EF.Functions.Like(s.Text, $"%{query}%"))
                .OrderBy(s => s.Text)
                .Select(s => s.Text)
                .Take(25)
                .ToListAsync();

            return Ok(results);
        }
    }
}
