# @byted/by-cross

English | [简体中文](./README.zh-CN.md)

## ✨ Features

- Zero-config, easy to use
- Support webpack v4
- Support html-webpack-plugin v4

## 🚀 QuickStart

### Install

```bash
 npm i  @byted/by-cross -D
```

### Usage

> Please put it after `HtmlWebpackPlugin`

```js
const ByCross = require('@byted/by-cross')

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

> Default config: `{ crossorigin: 'anonymous' }`

```js
new ByCross({ crossorigin: 'anonymous' })
```

---


## [Changelog](./CHANGELOG.md)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, yangshan.andy
