const Router = require('koa-router')
const router = new Router()

const user = require('../controller/user')

const routers = router
    .get('/info', user.getUserInfo)

module.exports = routers