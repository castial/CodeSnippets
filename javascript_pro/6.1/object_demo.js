/**
 * 创建对象的两种方式
 */
var person = new Object()
person.name = 'Harlan'
person.age = 28
person.job = 'software engineer'
person.sayHello = function () {
    console.log('Hello World!')
}

console.log(person)
person.sayHello()

var person2 = {
    name: 'Iafine',
    age: 30,
    sayName: function() {
        console.log(this.name)
    }
}
person2.sayName()

// 定义一个只读属性
Object.defineProperty(person2, 'address', {
    writable: false,
    value: 'BeiJing'
})
console.log(person2.address)
person2.address = 'ShenZhen'
console.log(person2.address)

// 定义属性的setter和getter方法
Object.defineProperty(person2, 'work', {
    get: function() {
        return this._work
    },
    set: function(newValue) {
        this._work = 'Work: ' + newValue
    }
})
person2.work = 'Writer'
console.log(person2.work)

// 定义多个属性
Object.defineProperties(person2, {
    map: {
        value: 'BaiDu'
    },
    fruit: {
        value: 'apple'
    }
})
console.log(person2)

// 工厂模式创建对象
function createPerson(name, age, job) {
    var o = new Object()
    o.name = name
    o.age = age
    o.job = job

    return o
}
console.log(createPerson('Harlan', 30, 'Writer'))

// 构造函数创建对象
function Person(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
}
console.log(new Person('Iafine', 28, 'software engineer'))

// 原型模式创建对象
function Dog() {

}
Dog.prototype.name = 'Nick'
Dog.prototype.age = 1
Dog.prototype.kind = 'JinMao'
Dog.prototype.sayHello = function() {
    console.log('汪')
}
console.log(new Dog().sayHello())


