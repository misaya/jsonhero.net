# Contributing to jsonhero.net

[English](./CONTRIBUTING.md) | [简体中文](./CONTRIBUTING.zh-CN.md)

Thanks for considering a contribution.

jsonhero.net is an independently maintained fork of the original JSON Hero
project. Please send issues and pull requests to the current repository:
[misaya/jsonhero.net](https://github.com/misaya/jsonhero.net).

## Development

Read [DEVELOPMENT.md](./DEVELOPMENT.md) to get the project running locally.

The current stack is:

- ASP.NET Core 8 API in `src/JsonHero.Api`.
- Vite React frontend in `src/JsonHero.Web`.
- Backend tests in `src/JsonHero.Api.Tests`.
- Frontend tests powered by Vitest.

## Running Tests

Run backend tests from the repository root:

```bash
dotnet test src/JsonHero.Api.Tests/JsonHero.Api.Tests.csproj
```

Run frontend tests:

```bash
cd src/JsonHero.Web
npm test
```

You can also run the frontend build:

```bash
npm run build
```

## Making Changes

Please make changes in a branch other than `main`. Use a short, descriptive
branch name such as:

- `bug/<short-description>` for fixes.
- `feature/<short-description>` for features.
- `docs/<short-description>` for documentation-only changes.

Before opening a pull request, run the tests that cover the changed area.

## Pull Requests

Open pull requests against the `main` branch in
[misaya/jsonhero.net](https://github.com/misaya/jsonhero.net).

Keep pull requests focused. Include a short description of the problem, the
solution, and the verification you performed.

## Upstream Attribution

This project contains code derived from
[triggerdotdev/jsonhero-web](https://github.com/triggerdotdev/jsonhero-web).
Keep attribution and license notices intact when modifying inherited files. See
[NOTICE](./NOTICE) and
[PROJECT-NAME-NOTICE.md](./PROJECT-NAME-NOTICE.md).
