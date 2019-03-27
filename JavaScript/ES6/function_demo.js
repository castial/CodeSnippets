// 提供默认值
function log(x, y='World') {
    console.log(x, y)
}

log('hello')

// 解构赋值
function foo({x, y = 5}) {
    console.log(x, y)
}

foo({})
foo({x: 1})
foo({x: 1, y: 10})

// 箭头语法
// var f = function(v) {
//     return v
// }
var f = v => v
console.log(f(10))

// var f2 = function() {
//     return 5
// }
var f2 = () => 5
console.log(f2())

// var sum = function(num1, num2) {
//     return num1 + num2
// }
var sum = (num1, num2) => num1 + num2
console.log(sum(10, 20))

var multi = (num1, num2) => {
    return num1 * num2
}
console.log(multi(10, 4))

var getItem = id => ({
    id: id,
    name: 'Iafine'
})
console.log(getItem(10))

function Timer() {
    this.s1 = 0
    this.s2 = 0

    // 箭头函数
    setInterval(() => this.s1++, 1000)
    // 普通函数
    setInterval(function() {
        this.s2++
    }, 1000);
}

var timer = new Timer()

setTimeout(() => console.log('s1: ', timer.s1), 3100)
setTimeout(() => console.log('s2: ', timer.s2), 3100)