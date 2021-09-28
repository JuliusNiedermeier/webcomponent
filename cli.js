const webpackConfig = require('./webpack.config')
const webpack = require('webpack')

const compiler = webpack(webpackConfig)
compiler.run((result) => console.log(result))