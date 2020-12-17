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
    new HtmlWebpackPlugin(),
    new ByCross(),
  ],
  /* ... */
}
```

### Config

> Default config: `{ crossorigin: 'anonymous' }`

```js
new byCross({ crossorigin: 'anonymous' })
```

---

😉😘 If it is helpful to you，please encourage me with a <b>⭐️<a href="#">Star</a></b> ~

## [Changelog](./CHANGELOG.md)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, yangshan.andy
