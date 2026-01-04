using Microsoft.AspNetCore.Mvc;

namespace GlobalLinkConsulting.Mvc.Controllers;

public class ClonesController : Controller
{
    [Route("giaonhan247")]
    public IActionResult Giaonhan247()
    {
        return View();
    }

    [Route("solexpress")]
    public IActionResult Solexpress()
    {
        return View();
    }
}
