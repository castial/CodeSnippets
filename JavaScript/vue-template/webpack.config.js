const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production'

let webpackConfig = {
    mode: isProd ? 'production' : 'development',
    entry: {
        app: path.join(__dirname, './src/main.js')
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                    'css-loader'
                ]
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
    devServer: {
        port: '8000',
        host: 'localhost',
        hot: true,
        inline: true,
        open: true
    },
    plugins: [
        new VueLoaderPlugin(),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html'),
            favicon: path.join(__dirname, 'public/favicon.ico')
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}

if (isProd) {
    webpackConfig.plugins.push(
        // 分离单独的 CSS 文件到 output
        new MiniCssExtractPlugin({
            filename: 'style.[hash:8].css',
        })
    )
}

module.exports = webpackConfig