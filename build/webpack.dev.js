const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js') 

const devConfig = {
    mode: 'development',     // 模式配置
    
    devServer:{
        contentBase:'./dist',
        open:true,
        port:8080,
        hot:true,
        historyApiFallback: true
    },
    
}

module.exports = merge(commonConfig,devConfig)