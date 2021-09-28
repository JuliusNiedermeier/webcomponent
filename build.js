#!/usr/bin/env node

const webpackConfig = require('./webpack.config')
const webpack = require('webpack')

webpack(webpackConfig).run((result) => console.log(result))