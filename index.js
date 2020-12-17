/**
 * byCross
 */
const HtmlWebpackPlugin = require("html-webpack-plugin")

class crossOriginPlugin {
  constructor(options) {
    this.options = options || { crossorigin: "anonymous" }
  }
  apply(compiler) {
    compiler.hooks.compilation.tap("MyPlugin", compilation => {
      console.log("The compiler is starting a new compilation...")

      // Static Plugin interface |compilation |HOOK NAME | register listener
      HtmlWebpackPlugin.getHooks(compilation).alterAssetTags.tapAsync(
        "CrossoriginWebpackPlugin",
        this._addAttributeToScripts.bind(this)
      )
    })
  }

  _addAttributeToScripts(htmlPluginData, callback) {
    console.log("中中中中中中中中中 htmlPluginData=", htmlPluginData)
    htmlPluginData.assetTags.scripts
      .filter(tag => tag.tagName === "script")
      .forEach(script => (script.attributes.crossorigin = this.options.crossorigin))

    callback(null, htmlPluginData)
  }
}

module.exports = crossOriginPlugin
