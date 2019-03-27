function callFunction(someFunction, someArgment) {
    return someFunction(someArgment)
}

function add100(num) {
    return num + 100
}

console.log(callFunction(add100, 100))

function compareName(propertyName) {
    return function(object1, object2) {
        var value1 = object1[propertyName]
        var value2 = object2[propertyName]

        if (value1 < value2) {
            return -1
        } else if (value1 > value2) {
            return 1
        } else {
            return 0
        }
    }
}

var data = [{name: 'Iafine', age: 28}, {name: 'Harlan', age: 30}]
data.sort(compareName('name'))
console.log(data)