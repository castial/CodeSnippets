function compare(value1, value2) {
    if (value1 > value2) {
        return 1
    } else if (value1 < value2) {
        return -1
    } else {
        return 0
    }
}
console.log(compare(10, 20))

function createFunctions() {
    var result = new Array()
    for (var i=0; i < 10; i++) {
        result[i] = function() {
            return i
        }
    }
    return result
}

var result = createFunctions()
console.log(result[0])

function createClosureFunctions() {
    var result = new Array()
    for (var i = 0; i < 10; i++) {
        result[i] = function(num) {
            return function() {
                return num
            }
        }(i)        
    }
    return result
}
var result2 = createClosureFunctions()
console.log(result2[0])

function outputNumber(count) {
    for (var i = 0; i < count; i++) {
        console.log('in ' + i)
    }
    console.log('out ' + i)
}
outputNumber(10)

// 块级作用域
function outputNumber(count) {
    (function() {
        for (var i = 0; i < count; i++) {
            console.log('in ' + i)
        }
    })()
    console.log('out ' + i)
}
outputNumber(10)
