function foo(obj) {
    with (obj) {
        a = 2
    }
}

var o1 = {
    a: 3
}

var o2 = {
    b: 3
}

foo(o1)
console.log(o1.a)       // 2
foo(02)
console.log(o2.a)
console.log(a)