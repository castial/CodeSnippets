const model = require('../../model/index')
const { database } = require('../../config/mysql/db.config')

init()

/**
 * 初始化数据库操作
 */
async function init() {
    try {
        // 创建相关表
        let temp_sequelize = new model.Sequelize('', database.username, database.password, {
            host: database.host,
            dialect: database.dialect,
            freezeTableName: database.freezeTableName,
            pool: database.pool
        })
        await temp_sequelize.query(`CREATE DATABASE IF NOT EXISTS ${database.name} DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`)

        // 测试连接
        await model.sequelize.authenticate()
        console.log('Database Connection has been established successfully.')

        // 创建表
        Object.keys(model).forEach(async key => {
            const value = model[key]
            if (!value.sync) {
                return true
            }
            try {
                await value.sync()
                console.log(`${key} table has been created successfully.`)
            } catch (error) {
                console.error(`${key} table has been created failed.`)
            }
        })
    } catch (error) {
        console.error('Failed to initialize database: ', error)
    }
}