module.exports = function(api) {
  api.cache(true)
  return {
    plugins: [
    ],
    presets: [
      require("@babel/preset-env"),
    ],
  }
}
