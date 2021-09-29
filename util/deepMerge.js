module.exports = function (base, inputObject) {
    const result = base

    for (let key in inputObject) {
        if (base[key] === undefined || typeof base[key] !== "object") {
            result[key] = inputObject[key]
        }

        else if (typeof base[key] === "object" && typeof inputObject[key] !== 'object') {
            result[key] = inputObject[key]
        }

        else if (typeof base[key] === 'object' && typeof inputObject[key] === 'object') {
            result[key] = module.exports(base[key], inputObject[key])
        }
    }

    return result
}