# learn-rabbitmq
[![Build Status](https://travis-ci.com/mrkngiht/learn-rabbitmq.svg?branch=master)](https://travis-ci.com/mrkngiht/learn-rabbitmq)

RabbitMq 入门教程


请访问  [rabbitmq入门教程](https://rabbitmq.cn).


# 贡献指南

非常感谢您关注 Nginx 入门教程项目，在提交您的贡献之前，请务必认真阅读以下准则。

- [问题反馈](#Issue)
- [开发指南](#develop)
    - [常用脚本命令（npm scripts）](#npm-scripts)
    - [项目结构](#dir-spec)
    - [提交请求（pull request）](#pull-request)
- [文档说明](#docs-spec)

<a id="Issue"></a>
## 问题反馈

- 请避免提交重复的 Issue，在提交之前搜索现有的 Issue 。
- 请确定 Issue 的类型，并在 Issue 内容描述清晰，我们将根据内容对 Issue 打上对应的 label 。

<a id="develop"></a>
## 开发设置

项目依赖 [VuePress](https://vuepress.vuejs.org/) ，需要安装 [Node.js](https://nodejs.org/) 版本8+ ，下载项目到本地后安装依赖 `yarn install` 。

<a id="npm-scripts"></a>
### 常用脚本命令

``` bash
# 启动本地 HTTP 服务器用来本地预览
$ yarn dev

# 编译 markdown 文档为 html 文件
$ yarn build
```

<a id="dir-spec"></a>
### 项目结构

```
docs                - 文档目录
├── .vuepress       - 文档配置
├── README.md       - 文档首页
└── guide           - 入门教程源文件目录
```

<a id="pull-request"></a>
### 提交请求（pull request）

1. fork [mrknight/learn-rabbitmq](https://github.com/mrnight/learn-rabbitmq)
1. 把个人仓库（repository）克隆到电脑上，并安装所依赖的插件。
1. 开始编辑文件，可以通过命令 `yarn dev` 预览编辑的效果。
1. 推送（push）分支。
1. 建立一个新的合并申请（pull request）并描述变动。

<a id="docs-spec"></a>
## 文档说明

- 文档基于 Markdown 格式编写。
- 文档编辑地址可通过访问文档左下角编辑按钮获得。
- 文档内链接使用相对路径，如： `[路由](routing.md)` 。
- 使用中文半角标点符号。
- 名词区分大小写。
- 英文、代码、链接前后添加空格。
- 新增文档最好添加文档对应的目录配置（`docs/.vuepress/config.js`）,如不熟悉 vuepress 可以只在教程 guide 目录增加md文件，由我来合并。

