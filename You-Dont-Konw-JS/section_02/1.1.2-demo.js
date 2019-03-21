function identify(context) {
    return context.name.toUpperCase()
}

function speak(context) {
    var greeting = "Hello I'm " + identify(context)
    console.log(greeting)
}

var me = {
    name: 'Kyle'
}

var you = {
    name: 'Reader'
}

console.log(identify(me))
console.log(identify(you))

speak(me)
speak(you)