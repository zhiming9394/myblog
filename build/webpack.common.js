const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebPackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: './src/index.js'
    },               // 入口文件

    output: {
        filename: '[name].[chunkhash].js',      // 打包后的文件名称
        publicPath: '/',
        path: path.resolve(__dirname, '../dist')  // 打包后的目录，必须是绝对路径
    }, // 出口文件

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'sass-loader']
            }]
    },              // 处理对应模块

    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            "chunksSortMode": 'none'
        }),
        new CleanWebPackPlugin({
            root : path.resolve(__dirname, '../')
        }),
    ],             // 对应的插件

    stats: { children: false },


    performance: {
        hints: false
    }


}