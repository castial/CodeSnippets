module.exports = {
    database: {
        name: 'full_stack_framework',
        username: 'root',
        password: 'liyang5485589',
        host: '127.0.0.1',
        dialect: 'mysql',   // 数据库类型
        freezeTableName: true,  // 不修改表名为复数
        pool: {
            max: 20,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    }
}