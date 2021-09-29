const webpackDefaultConfig = require('./webpack-default.config')
const { requireOptionalModule, findProjectRootDirectory, deepMerge } = require('./util')
const path = require('path')

module.exports = deepMerge(
    webpackDefaultConfig,
    requireOptionalModule(path.resolve(findProjectRootDirectory(__dirname), 'webcomponent.config.js')).webpack
)