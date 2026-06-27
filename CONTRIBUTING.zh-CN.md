# 参与贡献 jsonhero.net

[English](./CONTRIBUTING.md) | 简体中文

感谢你考虑为本项目贡献代码或文档。

jsonhero.net 是原始 JSON Hero 项目的独立维护 fork。请把 issue 和 pull request
提交到当前仓库：
[misaya/jsonhero.net](https://github.com/misaya/jsonhero.net)。

## 开发

请先阅读 [DEVELOPMENT.md](./DEVELOPMENT.md)，了解如何在本地运行项目。

当前技术栈为：

- `src/JsonHero.Api` 中的 ASP.NET Core 8 API。
- `src/JsonHero.Web` 中的 Vite React 前端。
- `src/JsonHero.Api.Tests` 中的后端测试。
- 基于 Vitest 的前端测试。

## 运行测试

在仓库根目录运行后端测试：

```bash
dotnet test src/JsonHero.Api.Tests/JsonHero.Api.Tests.csproj
```

运行前端测试：

```bash
cd src/JsonHero.Web
npm test
```

也可以运行前端构建：

```bash
npm run build
```

## 修改代码

请在 `main` 之外的分支上修改。分支名称建议简短并能说明用途，例如：

- `bug/<short-description>` 用于修复问题。
- `feature/<short-description>` 用于新增功能。
- `docs/<short-description>` 用于纯文档修改。

提交 pull request 前，请运行覆盖相关修改范围的测试。

## Pull Request

请向 [misaya/jsonhero.net](https://github.com/misaya/jsonhero.net) 的 `main`
分支提交 pull request。

请保持 pull request 聚焦，并简要说明问题、解决方案和已经完成的验证。

## 上游归属

本项目包含派生自
[triggerdotdev/jsonhero-web](https://github.com/triggerdotdev/jsonhero-web)
的代码。修改继承文件时，请保留归属和许可证声明。见 [NOTICE](./NOTICE)。
