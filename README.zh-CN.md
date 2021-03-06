#  WebpackScriptCross

[English](./README.md) | 简体中文

## ✨ 特性

- 零配置/极简使用
- 支持 webpack 版本 v4/5
- 支持 html-webpack-plugin 版本 v4/5

## 🚀 快速开始

### 安装

```bash
 npm i  WebpackScriptCross -D
```

### 使用

> 需定义在 `HtmlWebpackPlugin` 插件之后

```js
const WebpackScriptCross = require('webpack_script_cross')

const webpackConfig = {
  /* ... */
  plugins: [
    new HtmlWebpackPlugin(),
    new WebpackScriptCross(),
  ],
  /* ... */
  output:{
    /* ... */
      crossOriginLoading:"anonymous" // Spa 应用需要加这个，来保证异步加载的script标签有crossorigin 属性
    /* ... */
  }
}
```
> 注意：如果react项目不生效，请保证 react-scripts >= "^4.0.1"

### 配置

> 默认配置为：`{ crossorigin: 'anonymous' , debug:false}`

```js
new WebpackScriptCross({ 
  crossorigin: 'anonymous', // 可选
  debug:true  // 可选
})
```

---


## [更新日志](./CHANGELOG.md)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, yangshan.andy
