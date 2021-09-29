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

module.exports.deepMerge = function (base, inputObject) {
    const result = base

    for (let key in inputObject) {
        if (base[key] === undefined || typeof base[key] !== "object") {
            result[key] = inputObject[key]
        }

        else if (typeof base[key] === "object" && typeof inputObject[key] !== 'object') {
            result[key] = inputObject[key]
        }

        else if (typeof base[key] === 'object' && typeof inputObject[key] === 'object') {
            result[key] = module.exports.deepMerge(base[key], inputObject[key])
        }
    }

    return result
}