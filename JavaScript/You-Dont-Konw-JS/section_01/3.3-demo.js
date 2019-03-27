var a = 2

// 函数声明
function foo() {
    var a = 3
    console.log(a)
}
// foo()
// console.log(a)

// 函数表达式
(function foo() {
    var a = 3
    console.log(a)
})()
console.log(a)