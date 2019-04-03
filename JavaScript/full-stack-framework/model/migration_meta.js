module.exports = (sequelize, DataTypes) => {
    const MigrationMeta = sequelize.define('migration_meta', {
        file_name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            comment: '执行过的迁移文件'
        }
    })

    return MigrationMeta
}