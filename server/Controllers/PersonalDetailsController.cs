using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/personal-details")]
public class PersonalDetailsController : ControllerBase
{
    private readonly SQLDbContext _context;

    public PersonalDetailsController(SQLDbContext context)
    {
        _context = context;
    }

    // GET endpoint to fetch personal details
    [HttpGet]
    public IActionResult GetPersonalDetails()
    {
        var personalDetails = _context.PersonalDetails.ToList();
        return Ok(personalDetails);
    }

    // POST endpoint to add personal details
    [HttpPost]
    public IActionResult AddPersonalDetail(PersonalDetail personalDetail)
    {
        _context.PersonalDetails.Add(personalDetail);
        _context.SaveChanges();
        return Ok();
    }
}
