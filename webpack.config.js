const path = require('path')
const requireOptional = require('./requireOptional')

const config = {
    mode: 'production',
    entry: path.resolve(__dirname, '..', 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'bundle.js'
    }
}

module.exports = { ...config, ...requireOptional(path.resolve(__dirname, '..', 'webcomponent.config.js')).webpack }