const fs = require('fs')
const path = require('path')
const http = require('http')
const open = require('opn')
const url = require('url')

/**
 * 创建Public文件夹
 */
const folderPath = path.join(__dirname, '../public')

function createPublicFolder() {

    return new Promise((resolve, reject) => {
        fs.mkdir(folderPath, (error) => {
            if (error) {
                reject(error)
            } else {
                console.log('创建public文件夹成功')
                resolve()
            }
        })
    })
}

/**
 * 创建index.html文件，用于展示内容
 */
function createHTMLFile() {
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

    return new Promise((resolve, reject) => {
        fs.writeFile(htmlPath, content, 'utf8', (error) => {
            if (error) {
                reject(error)
            } else {
                console.log('创建index.html文件成功')
                resolve()
            }
        })
    });
}

/**
 * 创建index.css文件，用于优化UI
 */
function createCSSFile() {
    const cssFolderPath = path.join(folderPath, 'css')
    const cssPath = path.join(cssFolderPath, 'index.css')

    const content = `body {background-color: red;}`

    return new Promise((resolve, reject) => {
        fs.mkdir(cssFolderPath, (error) => {
            if (error) {
                reject(error)
            } else {
                fs.writeFile(cssPath, content, 'utf8', (error) => {
                    if (error) {
                        reject(error)
                    } else {
                        console.log('创建index.css文件成功')
                        resolve()
                    }
                })
            }
        })
    })
}

/**
 * 开启本地服务，打开静态文件
 */
function openIndexPage() {

    const htmlPath = path.join(folderPath, 'index.html')

    return new Promise((resolve, reject) => {

        const server = http.createServer()

        server.listen(9001, () => {
            console.log('请访问http://127.0.0.1:9001，查看效果')
        })
    
        server.on('request', function (request, response) {
            var requestPath = url.parse(request.url, true)
            if (requestPath.pathname == '/') {
                requestPath.pathname += 'index.html'
            }
            
            var staticFilePath = path.join(folderPath, requestPath.pathname)
            
            fs.readFile(staticFilePath, 'binary', (error, data) => {
                if (error) {
                    reject(error)
                } else {
                    response.writeHead(200, { 'Content-Type': 'text/html' })
                    response.write(data, 'binary')
                    response.end()
                    resolve()
                }
            })
        })
    
        // 打开默认浏览器
        open('http://127.0.0.1:9001')
    })
}

createPublicFolder()
    .then(() => createHTMLFile())
    .then(() => createCSSFile())
    .then(() => openIndexPage())
    .catch((error) => {
        console.error(error)
    })