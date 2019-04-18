const merge = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        port: '8000',
        host: 'localhost',
        hot: true,
        inline: true,
        open: true,
        historyApiFallback: true    // 不加这个，直接加载单独的url会默认去找静态资源
    },
})