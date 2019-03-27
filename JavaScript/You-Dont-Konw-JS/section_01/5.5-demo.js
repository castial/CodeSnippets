function coolModule() {
    var something = 'cool'
    var another = [1, 2, 3]

    function doSomething() {
        console.log(something)
    }

    function doAnother() {
        console.log(another.join('!'))
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother 
    }
}

var foo = coolModule()
foo.doSomething()
foo.doAnother()


// 单例模式
var bar = (() => {
    var something = 'cool'
    var another = [1, 2, 3]

    function doSomething() {
        console.log(something)
    }

    function doAnother() {
        console.log(another.join('!'))
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother 
    }
})()

bar.doSomething()
bar.doAnother()