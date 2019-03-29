class User {
    async getUserInfo(ctx) {
        const userInfo = {
            name: 'Harlan',
            address: 'ShenZhen'
        }
        ctx.body = userInfo
    }
}

module.exports = new User()