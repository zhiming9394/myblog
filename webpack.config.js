const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebPackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',               // 入口文件
    output: {
        filename: 'index.js',      // 打包后的文件名称
        publicPath: '/',
        path: path.resolve('./dist')  // 打包后的目录，必须是绝对路径
    }, // 出口文件
    devServer:{
        contentBase:'./dist',
        open:true,
        port:8080,
        hot:true,
        historyApiFallback: true
    },
    module: {
        rules:[
        {
            test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader',
        },
        {
            test:/\.sass$/,
            use:[
                'style-loader',
                {
                    loader:'css-loader',
                    options:{
                        importLoaders:2
                    }
                },
                'sass-loader']
        }]
    },              // 处理对应模块
    plugins: [
        new HtmlWebpackPlugin({
            template:"src/index.html",
            "chunksSortMode": 'none'
        }),
        new CleanWebPackPlugin(),
    ],             // 对应的插件
    mode: 'development'      // 模式配置
}