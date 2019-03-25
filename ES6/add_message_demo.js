/**
 * 当消息被添加到消息队列中后，如果当前消息还未执行完毕，那么等待的消息并不能抢占，必须等到执行完毕后才能执行。
 */
const s = new Date().getSeconds()

setTimeout(function() {
    console.log('Run after ' + (new Date().getSeconds() - s) + ' seconds')
})

while(true) {
    if (new Date().getSeconds() - s >= 2) {
        console.log('Good, looped for 2 seconds')
        break
    }
}

/**
 * 使用setTimeout时，如果将第二个参数设置为0，也不能说明消息体会立即执行。
 */
(function() {
    console.log('开始了。。。')
    
    setTimeout(function() {
        console.log('这是第一条消息的回调')
    }, 0)

    console.log('这是第一条消息')

    setTimeout(function() {
        console.log('这是第二条消息的回调')
    }, 0)

    console.log('这是第二条消息')

    console.log('结束了。。。')
})()

