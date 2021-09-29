const fs = require('fs')

module.exports.requireOptionalModule = function (path) {
    if (fs.existsSync(path)) {
        return require(path)
    } else {
        return {}
    }
}

module.exports.findProjectRootDirectory = function (cwd) {
    const regexResponse = /^(.*?)node_modules/.exec(cwd);
    return regexResponse ? regexResponse[1] : cwd;
}