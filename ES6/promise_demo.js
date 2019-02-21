function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done')
    })
}

timeout(100).then((value) => {
    console.log(value)
})

// 异步加载图片
function loadImage(url) {
    return new Promise((resolve, reject) => {
        const image = new Image()

        image.onload = () => {
            resolve(image)
        }
        image.onerror = () => {
            reject(new Error('Cound not load image at ' + url))
        }
        image.src = url
    })
}
loadImage('https://www.baidu.com')
    .then(result => {

    })
    .catch(error => {

    })
    .finally(() => {
        
    })
