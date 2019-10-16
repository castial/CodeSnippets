var b = 2
function foo() {
    // var b = 4
    function bar() {
        console.log(b)
    }
    bar()
}

foo()