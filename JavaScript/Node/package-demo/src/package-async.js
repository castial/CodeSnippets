const fs = require('fs')
const path = require('path')
const http = require('http')
const open = require('opn')
const url = require('url')
const util = require('util')

const mkdir = util.promisify(fs.mkdir)
const writeFile = util.promisify(fs.writeFile)
const readFile = util.promisify(fs.readFile)

/**
 * 创建Public文件夹
 */
const folderPath = path.join(__dirname, '../public')

async function createPublicFolder() {
    await mkdir(folderPath)
}

/**
 * 创建index.html文件，用于展示内容
 */
async function createHTMLFile() {
    const content = `<!DOCTYPE html>
     <html>
     <head>
         <meta charset="utf-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <title>Demo</title>
         <meta name="viewport" content="width=device-width, initial-scale=1">
         <link rel="stylesheet" type="text/css" href="css/index.css">
         <style type="text/css">
             body {background-color: red;}
        </style>
     </head>
     <body>
         <h1>Hello World</h1>
     </body>
     </html>`
    const htmlPath = path.join(folderPath, 'index.html')
    
    await writeFile(htmlPath, content, 'utf8')
}

/**
 * 创建index.css文件，用于优化UI
 */
async function createCSSFile() {
    const cssFolderPath = path.join(folderPath, 'css')
    const cssPath = path.join(cssFolderPath, 'index.css')

    const content = `body {background-color: red;}`

    await mkdir(cssFolderPath)
    await writeFile(cssPath, content, 'utf8')
}

/**
 * 开启本地服务，打开静态文件
 */
async function openIndexPage() {

    const htmlPath = path.join(folderPath, 'index.html')

    const server = http.createServer()

    server.listen(9001, () => {
        console.log('请访问http://127.0.0.1:9001，查看效果')
    })
    server.on('request', async (request, response) => {
        var requestPath = url.parse(request.url, true)
        if (requestPath.pathname == '/') {
            requestPath.pathname += 'index.html'
        }
        
        var staticFilePath = path.join(folderPath, requestPath.pathname)
        
        const data = await readFile(staticFilePath, 'binary')

        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write(data, 'binary')
        response.end()
    })

    // 打开默认浏览器
    open('http://127.0.0.1:9001')
}

(async () => {
    try {
        await createPublicFolder()
        await createHTMLFile()
        await createCSSFile()
        await openIndexPage()
    } catch (error) {
        console.error('错误信息：' + error)
    }
})()
