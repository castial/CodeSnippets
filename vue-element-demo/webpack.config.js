const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, './app'),
        port: 8084,
        open: true,
        hot: true
    }
}