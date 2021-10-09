/**
 * byCross
 */

class crossOriginPlugin {
  constructor(options) {
    this.options = options || { crossorigin: "anonymous" }
  }
  apply(compiler) {
    compiler.hooks.compilation.tap("CrossoriginWebpackPlugin", compilation => {
      // Static Plugin interface |compilation |HOOK NAME | register listener
      let htmlWebpackPlugin = compiler.options.plugins.find((plugin) => {
          return plugin.constructor.name === "HtmlWebpackPlugin";
      });
      const HtmlWebpackPlugin = htmlWebpackPlugin.constructor;
      HtmlWebpackPlugin.getHooks(compilation).alterAssetTags.tapAsync(
        "CrossoriginWebpackPlugin",
        this._addAttributeToScripts.bind(this)
      )
    })
  }
  _addAttributeToScripts(htmlPluginData, callback) {
    htmlPluginData.assetTags.scripts
      .filter(tag => tag.tagName === "script")
      .forEach(script => {
        script.attributes.crossorigin = this.options.crossorigin
        if(this.options.debug){
          console.log("成功加上跨域头",script)
        }
      })

    callback(null, htmlPluginData)
  }
}

module.exports = crossOriginPlugin
