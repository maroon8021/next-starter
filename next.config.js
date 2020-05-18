const path = require("path")

module.exports = {
  webpack(config, _) {
    config.resolve.alias["c"] = path.join(__dirname, "components")
    return config
  },
}
