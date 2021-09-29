const path = require('path')
const { findProjectRootDirectory } = require('./util')

module.exports = {
    mode: 'production',
    entry: path.resolve(findProjectRootDirectory(__dirname), 'index.js'),
    output: {
        path: path.resolve(findProjectRootDirectory(__dirname), 'dist'),
        filename: 'bundle.js'
    }
}