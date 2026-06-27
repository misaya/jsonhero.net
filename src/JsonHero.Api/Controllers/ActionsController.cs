using JsonHero.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace JsonHero.Api.Controllers;

/// <summary>
/// Bridge controller for Remix-style /actions/ routes used by the React SPA frontend.
/// Maps old Remix action routes to the ASP.NET Core API.
/// </summary>
[ApiController]
[Route("actions")]
public class ActionsController : ControllerBase
{
    private readonly DocumentService _documentService;
    private readonly UrlPreviewService _urlPreviewService;

    public ActionsController(DocumentService documentService, UrlPreviewService urlPreviewService)
    {
        _documentService = documentService;
        _urlPreviewService = urlPreviewService;
    }

    /// <summary>POST /actions/createFromUrl</summary>
    [HttpPost("createFromUrl")]
    public async Task<IActionResult> CreateFromUrl([FromForm] string jsonUrl, [FromForm] string? title)
    {
        if (string.IsNullOrWhiteSpace(jsonUrl))
            return BadRequest(new { error = "jsonUrl is required." });

        var document = await _documentService.CreateFromUrlAsync(jsonUrl, title, null, false);
        return Redirect($"/j/{document.Id}");
    }

    /// <summary>GET /actions/createFromUrl?utm_source=...</summary>
    [HttpGet("createFromUrl")]
    public async Task<IActionResult> CreateFromUrlGet([FromQuery] string jsonUrl, [FromQuery] string? title, [FromQuery] string? utm_source)
    {
        if (string.IsNullOrWhiteSpace(jsonUrl))
            return BadRequest(new { error = "jsonUrl is required." });

        var document = await _documentService.CreateFromUrlAsync(jsonUrl, title, null, false);
        return Redirect($"/j/{document.Id}");
    }

    /// <summary>POST /actions/createFromFile</summary>
    [HttpPost("createFromFile")]
    public async Task<IActionResult> CreateFromFile([FromForm] string title, [FromForm] string rawJson)
    {
        if (string.IsNullOrWhiteSpace(rawJson))
            return BadRequest(new { error = "rawJson is required." });

        var document = await _documentService.CreateFromRawJsonAsync(rawJson, title, null, false);
        return Redirect($"/j/{document.Id}");
    }

    /// <summary>POST /actions/setTheme</summary>
    [HttpPost("setTheme")]
    public IActionResult SetTheme([FromForm] string theme)
    {
        // Set theme cookie and redirect back
        Response.Cookies.Append("theme", theme, new CookieOptions
        {
            Path = "/",
            MaxAge = TimeSpan.FromDays(365),
            SameSite = SameSiteMode.Lax
        });
        return Redirect(Request.Headers.Referer.ToString() ?? "/");
    }

    /// <summary>GET /actions/getPreview/:url</summary>
    [HttpGet("getPreview/{*url}")]
    public async Task<IActionResult> GetPreview(string url)
    {
        if (string.IsNullOrWhiteSpace(url))
            return BadRequest(new { error = "url is required." });

        var decodedUrl = Uri.UnescapeDataString(url);
        var preview = await _urlPreviewService.GetPreviewAsync(decodedUrl);
        return Ok(preview);
    }

    /// <summary>POST /actions/{id}/update</summary>
    [HttpPost("{id}/update")]
    public async Task<IActionResult> UpdateDocument(string id, [FromForm] string? title)
    {
        var document = await _documentService.UpdateDocumentAsync(id, title);
        if (document == null)
            return NotFound();

        return Redirect($"/j/{id}");
    }
}
