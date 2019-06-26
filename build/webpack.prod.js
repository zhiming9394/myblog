const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js') 

prodConfig= {
    mode: 'production',      // 模式配置
}


module.exports  =  merge(commonConfig,prodConfig)