const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test:/\.vue$/,use:'vue-loader'}
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