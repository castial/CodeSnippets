const merge = require('webpack-merge')
const base = require('./webpack.base')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(base, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        // 每次build清空dis目录
        new CleanWebpackPlugin(),
        // 分离单独的 CSS 文件到 output
        new MiniCssExtractPlugin({
            filename: 'style.[hash:8].css',
        })
    ]
})