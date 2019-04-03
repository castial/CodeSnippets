const path = require('path')
const fs = require('fs')

const migrate = {
    async new() {
        const tplPath = path.join(__dirname, '../../migration/.tpl.js')
        const tplContent = fs.readFileSync(tplPath, 'utf-8')

        const timestamp = new Date().getTime()
        const migrateFileName = `${timestamp}_migration.js`
        const migrateFilePath = path.join(__dirname, '../../migration', migrateFileName)
        fs.writeFileSync(migrateFilePath, tplContent)
        
        return migrateFilePath
    }
}

migrate.new()
    .then(migrateFilePath => {
        console.log('New migration was created at ' + migrateFilePath)
        process.exit(0)
    })
    .catch(error => {
        console.error('New migration was created failed: ', error)
    })