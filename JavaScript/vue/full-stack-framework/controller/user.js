const model = require('../model/index')

class User {
    async getUserInfo(ctx) {
        const userInfo = await model.User.findAll()
        ctx.body = userInfo
    }
}

module.exports = new User()