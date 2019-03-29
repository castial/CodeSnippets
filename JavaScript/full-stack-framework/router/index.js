const Router = require('koa-router')
const router = new Router()

const user = require('./user')

// 子路由定义
router.use('/user', user.routes(), user.allowedMethods())

module.exports = router
