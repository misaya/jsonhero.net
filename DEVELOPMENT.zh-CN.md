## jsonhero.net 本地开发指南

[English](./DEVELOPMENT.md) | 简体中文

jsonhero.net 由 ASP.NET Core 8 API 和 Vite React SPA 组成，前端位于
`src/JsonHero.Web`。

### 安装依赖

在本地运行 jsonhero.net 前，请先安装以下依赖。

#### Git

你的机器上很可能已经安装了 git。如果没有，可以从
[Git website](https://git-scm.com) 安装。

#### .NET SDK 8

安装 [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)。

#### Node.js 22

前端构建使用 Vite，Docker 镜像也使用 Node.js 22。

#### NPM

如果你通过上面的链接安装 Node.js，通常会自动安装 NPM。可以通过以下命令确认：

```bash
npm --version
```

### 准备仓库

安装前端依赖：

```bash
cd src/JsonHero.Web
npm install
```

在仓库根目录恢复 .NET 包：

```bash
dotnet restore src/JsonHero.Api.Tests/JsonHero.Api.Tests.csproj
```

### 启动开发服务

在一个终端中启动 API：

```bash
dotnet run --project src/JsonHero.Api
```

在另一个终端中启动 Vite：

```bash
cd src/JsonHero.Web
npm run dev
```

打开终端中显示的 Vite URL。Vite 会把 `/api`、`/actions` 和 `/j/*.json`
请求代理到运行在 `http://localhost:5299` 的 ASP.NET Core API。

### 构建和测试

```bash
dotnet test src/JsonHero.Api.Tests/JsonHero.Api.Tests.csproj
cd src/JsonHero.Web
npm test
npm run build
```

### URL 预览

OpenGraph 预览由 ASP.NET Core `UrlPreviewService` 处理。如果需要通过
OpenGraph Ninja 进行已认证请求，请设置 `OPENGRAPH_NINJA_API_KEY`。
