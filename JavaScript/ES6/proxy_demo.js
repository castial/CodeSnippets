let validator = {
    set: function(obj, prop, value) {
        if (prop == 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer')
            }
            if (value > 200) {
                throw new TypeError('The age seems invalid')
            }
        }
    }
}

let person = new Proxy({}, validator)

console.log(person.age = 100)
// console.log(person.age = 300)
// console.log(person.age = 'Hello')

var target = () => 'I am the target'
var handler = {
    apply: function() {
        return 'I am the proxy'
    }
}
var p = new Proxy(target, handler)
console.log(p())