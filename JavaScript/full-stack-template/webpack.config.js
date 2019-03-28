const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

let webpackConfig = {
    mode: isProd ? 'production' : 'development',
    entry: {
        app: path.join(__dirname, './view/src/main.js')
    },
    output: {
        filename: '[name].[hash:8].js',
        path: isProd ? path.join(__dirname, './vue-dist') : path.join(__dirname, 'dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    devServer: {
        port: 8024,
        host: 'localhost',
        hot: true
    },
    plugins: [
        new VueLoaderPlugin(),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, './view/index.html')
        })
    ]
}

module.exports = webpackConfig
