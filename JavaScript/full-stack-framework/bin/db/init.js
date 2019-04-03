const model = require('../../model/index')
const { database } = require('../../config/mysql/db.config')

/**
 * 初始化数据库操作
 */
const db = {
    async init() {
        await db.createDatabase()
        await db.authenticate()
        await db.syncTable()
    },
    async createDatabase() {
        // 创建相关表
        let temp_sequelize = new model.Sequelize('', database.username, database.password, {
            host: database.host,
            dialect: database.dialect,
            freezeTableName: database.freezeTableName,
            pool: database.pool
        })
        await temp_sequelize.query(`CREATE DATABASE IF NOT EXISTS ${database.name} DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`)
    },
    async authenticate() {
        // 测试连接
        await model.sequelize.authenticate()
        console.log('Database Connection has been established successfully.')
    },
    async syncTable() {
        // 创建表
        for (const key of Object.keys(model)) {
            const value = model[key]
            if (!value.sync || value === model.sequelize) {
                continue
            }
            await value.sync()
        }
    }
}

db.init()
    .then(() => {
        console.log('========== init database finish==========')
        process.exit(0)
    })
    .catch(error => {
        console.error('Occur error: ' + error)
    })
