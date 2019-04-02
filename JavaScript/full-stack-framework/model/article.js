module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define('article', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            comment: '文章标题'
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: '',
            comment: '文章内容'
        }
        // migrate_content: {
        //     type: DataTypes.TEXT,
        //     allowNull: true,
        //     defaultValue: '',
        //     comment: '迁移测试字段'
        // }
    })
    
    return Article
}