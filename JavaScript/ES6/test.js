if (false) {
    var value =  1
}
console.log(value)

// var funcs = []
// for (var i = 0; i < 3; i++) {
//     funcs[i] = function() {
//         console.log(i)
//     }
// }

// funcs[1]()

var funcs = []
for (const i = 0; i < 3; i++) {
    funcs[i] = function() {
        console.log(i)
    }
}

funcs[0]()

// for (let i = 0; i < 3; i++) {
//     let i = 'abc'
//     console.log(i)
// }


// for (let j = 0; j < 3; j++) {
//     var j = 'abc'
//     console.log(j)
// }