const Sequelize = require('sequelize')
const { database } = require('../mysql/db/db.config')

const sequelize = new Sequelize(database.name, database.username, database.password, {
    host: database.host,
    dialect: database.dialect,
    pool: database.pool
})


// 数据库初始化
async function connectionDatabase() {

    // 创建相关表
    let temp_sequelize = new Sequelize('', database.username, database.password, {
        host: database.host,
        dialect: database.dialect,
        pool: database.pool
    })
    await temp_sequelize.query(`CREATE DATABASE IF NOT EXISTS ${database.name} DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`)

    // 测试连接
    await sequelize.authenticate()
        .then(() => {
            console.log('Database Connection has been established successfully.')
        })
        .catch(error => {
            console.error('Unable to connect to the database: ', error)
        })
}

module.exports = {
    sequelize,
    Sequelize,
    connectionDatabase
}