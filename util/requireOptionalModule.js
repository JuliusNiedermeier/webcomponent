const fs = require('fs')

module.exports = function (path) {
    if (fs.existsSync(path)) {
        return require(path)
    } else {
        return {}
    }
}