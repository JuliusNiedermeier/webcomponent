const webpackDefaultConfig = require('./webpack-default.config')
const { requireOptionalModule, findProjectRootDirectory } = require('./util')
const path = require('path')

module.exports = {
    ...webpackDefaultConfig,
    ...requireOptionalModule(path.resolve(findProjectRootDirectory(__dirname), 'webcomponent.config.js')).webpack
}