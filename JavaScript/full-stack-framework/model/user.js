module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            comment: '用户名'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            comment: '邮箱'
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            comment: '头像'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            comment: '用户密码'
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            comment: '用户住址'
        }
    }, {
        hooks: {
            afterSync: async () => {
                const data = {
                    username: 'admin',
                    email: 'admin@iafine.com',
                    password: '123456',  //密码需要加密存储，后面再做
                    address: 'ShenZhen'
                }
                await User.create(data, {
                    ignoreDuplicates: false
                })
            }
        }
    })

    return User
}