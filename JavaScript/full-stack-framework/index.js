const Koa = require('koa')
const routers = require('./router')
const history = require('koa2-history-api-fallback')
const koaWebpack = require('koa-webpack')
const webpackConfig = require('./config/webpack.dev')
const koaStatic = require('koa-static')

const app = new Koa()

runDevServer()

async function runDevServer() {
    // 引入路由中间件
    app.use(routers.routes())
    app.use(routers.allowedMethods())
    
    app.use(koaStatic('public'))    // 项目用到的静态资源放在这里
    
    // 引入前端路由
    app.use(history({
        htmlAcceptHeaders: ['text/html'],
        index: '/'
    }))


    // 使用koa-webpack调试开发环境
    const middleware = await koaWebpack({
        config: webpackConfig,
        devMiddleware: {
            // stats: 'minimal'    // 只有在发生错误或者有新的编译的时候输出
        }
    })
    app.use(middleware)

    app.listen(8081)
}

async function runProdServer() {
    // 引入路由中间件
    app.use(routers.routes())
    app.use(routers.allowedMethods())

    // 引入前端路由
    app.use(history({
        htmlAcceptHeaders: ['text/html'],
        index: '/index.html'
    }))

    // 引入静态资源
    app.use(koaStatic('vue-dist'))
    app.use(koaStatic('public'))    // 项目用到的静态资源放在这里

    app.listen(8081)
}
