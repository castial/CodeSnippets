const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: [path.join(__dirname, '../view/main.js')]
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.join(__dirname, '../vue-dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|svg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10, // 小于8k的图片自动转成base64格式
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../view/index.html'),
            favicon: path.join(__dirname, '../public/favicon.ico')
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}