const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(eot|svg|ttf|woff|woff2)$/, use: ['file-loader'] }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        // alias: {
        //     'vue$': 'vue/dist/vue.js'
        // }
    }
}