function test() {
    var message = "hi"
}

function test2() {
    message2 = "Hello"
}

test()
test2()
console.log(message2)   // 不报错，因为message2是全局变量，但是错误不推荐
// console.log(message)    // 会报错，因为是局部变量

// 可以一条语句定义多个变量
var message = "Hi",
    isSuccess = true,
    age = 30
console.log(message + isSuccess + age)