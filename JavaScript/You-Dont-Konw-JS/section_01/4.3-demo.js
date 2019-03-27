foo()

var foo

function foo() {
    console.log(1)
}

foo = function() {
    console.log(2)
}

function foo() {
    console.log(3)
}

// foo()


// ==============demo02=================
bee()

var a = true

if (a) {
    function bee() {
        console.log(a)
    }
} else {
    function bee() {
        console.log(b)
    }
}