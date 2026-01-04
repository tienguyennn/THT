using Microsoft.AspNetCore.Mvc;

namespace GlobalLinkConsulting.Mvc.Controllers
{
    public class PageController : Controller
    {
        [Route("{*path}")]
        public IActionResult Serve(string path)
        {
            if (string.IsNullOrEmpty(path))
            {
                // return RedirectToAction("Index", "Home");
                 return NotFound();
            }

            // Normalize path for View lookup
            
            // Remove trailing slash if present
            if (path.EndsWith("/"))
            {
                path = path.Substring(0, path.Length - 1);
            }

            // Remove .html extension if present
            if (path.EndsWith(".html", StringComparison.OrdinalIgnoreCase))
            {
                path = path.Substring(0, path.Length - 5);
            }

            // Construct view path
            // Assuming migrated views are in Views/Page/
            // e.g. /vi/about-us -> Views/Page/vi/about-us.cshtml
            string viewPath = $"/Views/Page/{path}.cshtml";

            // Basic check to see if view presumably exists (Controller can't easily check file system in all deploys, 
            // but we can try-catch the ViewEngine or just return View and let it 404 naturally? 
            // Better to standard return View and let framework handle if missing)
            
            return View(viewPath);
        }
    }
}
