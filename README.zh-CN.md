#  @byted/by-cross

[English](./README.md) | 简体中文

## ✨ 特性

- 零配置/极简使用
- 支持 webpack 版本 v4
- 支持 html-webpack-plugin 版本 v4

## 🚀 快速开始

### 安装

```bash
 npm i  @byted/by-cross -D
```

### 使用

> 需定义在 `HtmlWebpackPlugin` 插件之后

```js
const ByCross = require('@byted/by-cross')

const webpackConfig = {
  /* ... */
  plugins: [
    new HtmlWebpackPlugin(),
    new ByCross(),
  ],
  /* ... */
}
```

### 配置

> 默认配置为：`{ crossorigin: 'anonymous' }`

```js
new ByCross({ crossorigin: 'anonymous' })
```

---


## [更新日志](./CHANGELOG.md)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, yangshan.andy
