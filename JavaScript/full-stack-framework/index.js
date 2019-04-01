const Koa = require('koa')
const routers = require('./router')
const history = require('koa2-history-api-fallback')
const koaWebpack = require('koa-webpack')
const webpackConfig = require('./config/webpack.dev')
const koaStatic = require('koa-static')
const logger = require('koa-logger')

const app = new Koa()

runServer()

/**
 * 启动服务
 */
async function runServer() {
    
    app.use(logger())
    // 引入路由中间件
    app.use(routers.routes())
    app.use(routers.allowedMethods())

    app.use(koaStatic('public'))    // 项目用到的静态资源放在这里

    if (process.env.NODE_ENV === 'production') {
        // 引入前端路由
        app.use(history({
            htmlAcceptHeaders: ['text/html'],
            index: '/index.html'
        }))

        // 引入静态资源
        app.use(koaStatic('vue-dist'))
    } else {
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
    }

    app.listen(8081)
}