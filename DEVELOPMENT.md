## jsonhero.net Local Development Guide

jsonhero.net runs as an ASP.NET Core 8 API that serves a Vite React SPA from
`src/JsonHero.Web`.

### Install dependencies

Before you can run jsonhero.net locally, install the following dependencies on
your machine:

#### Git

You most likely already have git installed on your machine, but if not, you can install it from the [Git website](https://git-scm.com).

#### .NET SDK 8

Install the [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0).

#### Node.js 22

The frontend build uses Vite and the Docker image uses Node.js 22.

#### NPM

If you install Node.js through the above link, you should also have NPM automatically installed as well. To make sure, run the following command in your preferred Terminal:

```bash
npm --version
```

### Prepare the repo

Install frontend dependencies:

```bash
cd src/JsonHero.Web
npm install
```

Restore .NET packages from the repository root:

```bash
dotnet restore src/JsonHero.Api.Tests/JsonHero.Api.Tests.csproj
```

### Start development servers

In one terminal, start the API:

```bash
dotnet run --project src/JsonHero.Api
```

In another terminal, start Vite:

```bash
cd src/JsonHero.Web
npm run dev
```

Open the Vite URL shown in the terminal. Vite proxies `/api`, `/actions`, and `/j/*.json` requests to the ASP.NET Core API on `http://localhost:5299`.

### Build and test

```bash
dotnet test src/JsonHero.Api.Tests/JsonHero.Api.Tests.csproj
cd src/JsonHero.Web
npm test
npm run build
```

### Previewing URLs

OpenGraph previews are handled by the ASP.NET Core `UrlPreviewService`. Set `OPENGRAPH_NINJA_API_KEY` if you need authenticated OpenGraph Ninja requests.
