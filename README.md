# webpack-cross

English | [简体中文](README.zh-CN.md)

## ✨ Features

- Zero-config, easy to use
- Support webpack v4/5
- Support html-webpack-plugin v4/5
- 零配置/极简使用
- 支持 webpack 版本 v4/5
- 支持 html-webpack-plugin 版本 v4/5

## 🚀 QuickStart

### Install

```bash
 npm i  webpack_cross -D
```

### Usage

> Please put it after `HtmlWebpackPlugin`

```js
const ByCross = require('webpack_cross')

const webpackConfig = {
  /* ... */
  plugins: [
    new HtmlWebpackPlugin(), // inject must be true (by default)
    new ByCross(),
  ],
  /* ... */
  output:{
    /* ... */
      crossOriginLoading:"anonymous" // Spa should have this to add (crossorigin) to script tag dynamically.
      // crossOriginLoading:"anonymous"  only works when script.src is  different from site's origin
    /* ... */
  }
}
```
> Attention:  if this not working in react project, please ensure the version of react-scripts  >= "^4.0.1"

### Config

> Default config: `{ crossorigin: 'anonymous',debug:false }`

```js
new ByCross({ 
  crossorigin: 'anonymous', // optional
  debug:false  // optional
})
```

---


## [Changelog](./CHANGELOG.md)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, yangshan.andy
