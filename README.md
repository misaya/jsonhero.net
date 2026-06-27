# jsonhero.net

[English](./README.md) | [简体中文](./README.zh-CN.md)

jsonhero.net is an independently maintained fork of
[triggerdotdev/jsonhero-web](https://github.com/triggerdotdev/jsonhero-web), the
original JSON Hero project.

This fork has diverged from the upstream project and now uses an ASP.NET Core 8
API with a Vite React frontend. It is maintained from the
[misaya/jsonhero.net](https://github.com/misaya/jsonhero.net) repository and is
not affiliated with, sponsored by, or endorsed by Trigger.dev, Stack Hero, or the
original JSON Hero maintainers.

The maintainer has registered and operates the `jsonhero.net` domain for this
independent project. The domain is used for this project's web presence and
does not imply affiliation with the original JSON Hero team.

## Features

- Browse JSON with column, tree, editor, and terminal-style views.
- Infer string content and show useful previews for URLs, dates, colors, images,
  and other common values.
- Generate an inferred JSON Schema for the loaded document.
- Search JSON keys, paths, values, and formatted values.
- Compare related values across a document.
- Share documents through local service URLs.

## Project Status

The project started as a fork of `triggerdotdev/jsonhero-web` and has since been
substantially modified. The most visible changes are:

- The backend is now an ASP.NET Core 8 API.
- The frontend is now a Vite React SPA under `src/JsonHero.Web`.
- The original Remix and Cloudflare Workers runtime has been removed.
- Docker, development, and test workflows target the new .NET + Vite stack.

Some internal namespaces, dependency names, and compatibility identifiers still
contain `JsonHero` because a full source-level rename is a separate engineering
change.

## Getting Started

Install frontend dependencies:

```bash
cd src/JsonHero.Web
npm install
```

Restore .NET packages from the repository root:

```bash
dotnet restore src/JsonHero.Api.Tests/JsonHero.Api.Tests.csproj
```

Start the API:

```bash
dotnet run --project src/JsonHero.Api
```

Start Vite in another terminal:

```bash
cd src/JsonHero.Web
npm run dev
```

Open the Vite URL shown in the terminal. Vite proxies `/api`, `/actions`, and
`/j/*.json` requests to the ASP.NET Core API on `http://localhost:5299`.

## API

Create a document by sending JSON to the local service:

```bash
curl -X POST http://localhost:5299/api/create.json \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Example",
    "content": { "foo": "bar" },
    "readOnly": false,
    "ttl": 3600
  }'
```

The response includes the document id and local document path:

```json
{
  "id": "YKKduNySH7Ub",
  "title": "Example",
  "location": "/j/YKKduNySH7Ub"
}
```

## Development

Run the backend tests:

```bash
dotnet test src/JsonHero.Api.Tests/JsonHero.Api.Tests.csproj
```

Run the frontend tests:

```bash
cd src/JsonHero.Web
npm test
```

See [DEVELOPMENT.md](./DEVELOPMENT.md) for the full local development guide.

## Issues and Contributions

Please open issues and pull requests in the current repository:
[misaya/jsonhero.net](https://github.com/misaya/jsonhero.net).

See [CONTRIBUTING.md](./CONTRIBUTING.md) before contributing.

## License and Attribution

The source code is distributed under the Apache License, Version 2.0. See
[LICENSE](./LICENSE) and [LICENSE-NOTICE.md](./LICENSE-NOTICE.md).

This repository includes software derived from the original JSON Hero project.
See [NOTICE](./NOTICE) for attribution and modification notes.

## Trademarks

The Apache License, Version 2.0 does not grant trademark rights. Upstream names,
logos, domains, and product marks are acknowledged only for attribution and
historical context.

> JSON Hero is a trademark and copyrighted work of its respective owners,
> including Trigger.dev and the original project contributors. This website
> (JsonHero.net) is an independent open-source evolution re-engineered in .NET.
> It is not officially affiliated with or endorsed by the original team. We
> deeply respect and salute their open-source spirit.

See [TRADEMARKS.md](./TRADEMARKS.md) for the project trademark policy.
