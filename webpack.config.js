const path = require('path')
const fs = require('fs')

const webcomponentConfigPath = './webcomponent.config.js'

function requireOptional(path) {
    if (fs.existsSync(path)) {
        return require(path)
    } else {
        return {}
    }
}

const defaultConfig = {
    mode: 'production',
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}

module.exports = { ...defaultConfig, ...requireOptional(webcomponentConfigPath) }