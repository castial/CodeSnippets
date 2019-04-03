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
    }, {
        hooks: {
            afterSync: async (modle) => {
                console.log('=======Article.afterSync=========')
            }
        }
    })
    
    return Article
}