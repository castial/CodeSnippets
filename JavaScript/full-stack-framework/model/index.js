const Sequelize = require('sequelize')
const { database } = require('../config/mysql/db.config')
const model = {}

const modelMap = {
    MigrationMeta: require('./migration_meta'),
    User: require('./user'),
    Article: require('./article')
}

const sequelize = new Sequelize(database.name, database.username, database.password, {
    host: database.host,
    dialect: database.dialect,
    freezeTableName: database.freezeTableName,
    pool: database.pool
})


Object.keys(modelMap).forEach(key => {
    model[key] = modelMap[key](sequelize, Sequelize.DataTypes)
})

// 关联关系
model.User.hasMany(model.Article)

// 迁移model定义
model.migrationMeta = model.MigrationMeta

model.sequelize = sequelize
model.Sequelize = Sequelize

module.exports = model
