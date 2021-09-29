const webpackDefaultConfig = require('./webpack-default.config')
const requireOptionalModule = require('./util/requireOptionalModule')
const findProjectRootDirectory = require('./util/findProjectRootDirectory')
const deepMerge = require('./util/deepMerge')
const path = require('path')

module.exports = deepMerge(
    webpackDefaultConfig,
    requireOptionalModule(path.resolve(findProjectRootDirectory(__dirname), 'webcomponent.config.js')).webpack
)