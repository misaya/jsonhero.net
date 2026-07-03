# jsonhero.net

[English](./README.md) | 简体中文

jsonhero.net 是一个独立维护的 fork，来源于原始 JSON Hero 项目
[triggerdotdev/jsonhero-web](https://github.com/triggerdotdev/jsonhero-web)。

这个 fork 已经和上游项目明显分叉，目前使用 ASP.NET Core 8 API 和 Vite React 前端。
项目由 [misaya/jsonhero.net](https://github.com/misaya/jsonhero.net) 仓库维护，
并且不隶属于 Trigger.dev、Stack Hero 或原始 JSON Hero 维护者，也不受其赞助或背书。

维护者已经注册并运营 `jsonhero.net` 域名，用于当前独立项目的网站入口和项目身份展示；
这不表示与原始 JSON Hero 团队存在官方关系。

## 功能

- 使用列视图、树视图、编辑器视图和终端风格视图浏览 JSON。
- 推断字符串内容，并为 URL、日期、颜色、图片等常见值提供预览。
- 为加载的文档生成推断得到的 JSON Schema。
- 搜索 JSON key、路径、值以及格式化后的值。
- 在整个文档中对比相关字段的值。
- 通过本地服务 URL 分享文档。

## 项目状态

本项目最初 fork 自 `triggerdotdev/jsonhero-web`，之后已经进行了大量修改。当前最明显的变化包括：

- 后端已经改为 ASP.NET Core 8 API。
- 前端已经改为位于 `src/JsonHero.Web` 的 Vite React SPA。
- 原始 Remix 和 Cloudflare Workers 运行时已经移除。
- Docker、开发和测试流程都已经面向新的 .NET + Vite 技术栈调整。

部分内部命名空间、依赖名称和兼容性标识仍然包含 `JsonHero`，这是因为完整的源码级重命名属于独立的工程改造。

## 快速开始

安装前端依赖：

```bash
cd src/JsonHero.Web
npm install
```

在仓库根目录恢复 .NET 包：

```bash
dotnet restore src/JsonHero.Api.Tests/JsonHero.Api.Tests.csproj
```

启动 API：

```bash
dotnet run --project src/JsonHero.Api
```

在另一个终端启动 Vite：

```bash
cd src/JsonHero.Web
npm run dev
```

打开终端中显示的 Vite URL。Vite 会把 `/api`、`/actions` 和 `/j/*.json`
请求代理到运行在 `http://localhost:5299` 的 ASP.NET Core API。

## API

向本地服务发送 JSON 来创建文档：

```bash
curl -X POST http://localhost:5299/api/create.json \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Example",
    "json": "{ \"foo\": \"bar\" }",
    "readOnly": false,
    "ttl": "2026-07-10T00:00:00Z"
  }'
```

响应会包含文档 id 和本地文档路径：

```json
{
  "id": "YKKduNySH7Ub",
  "title": "Example",
  "jsonUrl": "/j/YKKduNySH7Ub.json"
}
```

从外部 URL 创建文档：

```bash
curl -X POST http://localhost:5299/api/create.json \
  -H "Content-Type: application/json" \
  -d '{
    "title": "From URL",
    "url": "https://jsonplaceholder.typicode.com/todos/1"
  }'
```

也可以使用 GET 方式传参：

```bash
# 从 URL 创建
curl "http://localhost:5299/api/create.json?url=https://jsonplaceholder.typicode.com/todos/1&title=From%20GET"

# 从 JSON 创建（j 参数）
curl "http://localhost:5299/api/create.json?j=%7B%22hello%22%3A%22world%22%7D&title=Hello"
```

## 开发

运行后端测试：

```bash
dotnet test src/JsonHero.Api.Tests/JsonHero.Api.Tests.csproj
```

运行前端测试：

```bash
cd src/JsonHero.Web
npm test
```

完整本地开发说明见 [DEVELOPMENT.md](./DEVELOPMENT.md)。

## Issue 和贡献

请在当前仓库提交 issue 和 pull request：
[misaya/jsonhero.net](https://github.com/misaya/jsonhero.net)。

贡献前请阅读 [CONTRIBUTING.zh-CN.md](./CONTRIBUTING.zh-CN.md)。

## 许可证与归属

本项目源代码基于 Apache License, Version 2.0 分发。见 [LICENSE](./LICENSE)。

本仓库包含派生自原始 JSON Hero 项目的软件。归属、修改说明、项目名称背景和非官方关系说明见 [NOTICE](./NOTICE)。

## 项目名称与归属

上游项目名称、logo、域名和产品引用仅用于归属和历史背景说明。

> JSON Hero 是原始开源项目的作品名称。本站（JsonHero.net）是一个独立的、采用
> .NET 技术重构的开源演进版本，与原官方团队无商业附属或官方授权关系。特此向原
> 项目的开源精神致敬。
