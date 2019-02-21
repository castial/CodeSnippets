class Point {

    constructor(x, y) {
        this.x = x
        this.y = y
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')'
    }

    // 静态方法，可以被子类继承
    static foo() {
        return 'foo'
    }
}

class SubPoint extends Point {
    static foo() {
        return 'sub foo'
    }
}

let p = new Point(1, 2)
console.log(p)
console.log(Point.foo())
console.log(SubPoint.foo())