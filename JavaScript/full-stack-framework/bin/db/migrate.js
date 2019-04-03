const model = require('../../model/index')
const path = require('path')
const fs = require('fs')

const migrate = {
    async run() {
        console.log('===========Start Run Migration Files===========')
        const migrationMeta = model.migrationMeta
        const queryInterface = model.sequelize.getQueryInterface()

        const latestMeta = await model.migrationMeta.findOne({
            order: [['file_name', 'DESC']]
        })

        const latestTimestamp = latestMeta ? latestMeta.file_name.split('_')[0] : 0

        // 获取所有migration文件
        const migrationFileList = await migrate.migrationFileList()

        // console.log(migrationFileList)
        for (const file of migrationFileList) {
            const filename = path.basename(file)
            const timestamp = filename.split('_')[0]
            const migrationFile = require(path.join(file))

            if (timestamp > latestTimestamp) {
                console.log(`========Run ${filename} Migration========`)

                await migrationFile.up(queryInterface, model.Sequelize)        // 执行up方法
                await model.migrationMeta.create({ 'file_name' : filename })    // 数据库记录变更

                console.log(`========Run ${filename} Migration Successfully========`)
            }
        }

    },
    async migrationFileList() {
        const migrationFolderPath = path.join(__dirname, '../../migration')
        const migrationFileList = fs.readdirSync(migrationFolderPath)
            .filter(filename => filename.includes('migration.js'))
            .map(filename => {
                return path.join(migrationFolderPath, filename)
            })

        return migrationFileList
    }
}

migrate.run()
    .then(() => {
        console.log('===========Run Migration Files Successfully===========')
        process.exit(0)
    })
    .catch(error => {
        console.error('Occur error: ' + error)
    })