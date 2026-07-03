using JsonHero.Api.Data;
using JsonHero.Api.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHttpClient();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection")
    ?? "Data Source=jsonhero.db";

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(connectionString));

builder.Services.AddScoped<DocumentService>();
builder.Services.AddScoped<UrlPreviewService>();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

// Support deploying under a subdirectory (e.g., /version_01)
// Rewrite request path by stripping the prefix BEFORE routing.
// Must call UseRouting() explicitly AFTER the rewrite, because WebApplication
// auto-adds UseRouting as the first middleware otherwise.
var pathBase = Environment.GetEnvironmentVariable("PATH_BASE");
if (!string.IsNullOrEmpty(pathBase) && pathBase != "/")
{
    var prefix = new PathString(pathBase);
    app.Use((context, next) =>
    {
        if (context.Request.Path.StartsWithSegments(prefix, out var remaining))
        {
            var newPath = remaining.Value;
            if (string.IsNullOrEmpty(newPath)) newPath = "/";
            context.Request.Path = new PathString(newPath);
            context.Request.PathBase = prefix;
        }
        return next();
    });
}

// Explicit UseRouting AFTER path rewrite (suppresses auto-UseRouting)
app.UseRouting();

using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    if (dbContext.Database.GetMigrations().Any())
    {
        dbContext.Database.Migrate();
    }
    else
    {
        dbContext.Database.EnsureCreated();
    }
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();
app.MapControllers();

// Serve Vite-built React SPA from wwwroot, fallback to index.html for client-side routing
app.UseDefaultFiles();
app.UseStaticFiles();
app.MapFallbackToFile("index.html");

app.Run();
