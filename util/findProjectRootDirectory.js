module.exports = function (cwd) {
    const regexResponse = /^(.*?)node_modules/.exec(cwd);
    return regexResponse ? regexResponse[1] : cwd;
}