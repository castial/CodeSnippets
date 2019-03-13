var CustomModules = (() => {
    var modules = {}

    function define(name, deps, impl) {
        for (var i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]]
        }
        modules[name] = impl.apply(impl, deps)
    }

    function get(name) {
        return modules[name]
    }

    return {
        define: define,
        get: get
    }
})()

// bar
CustomModules.define('bar', [], function() {
    function hello(who) {
        return 'Hello ' + who
    }

    return {
        hello: hello
    }
})

// foo
CustomModules.define('foo', ['bar'], function() {
    var hungry = 'hippo'

    function awesome() {
        console.log(bar.hello(hungry).toUpperCase())
    }
    
    return {
        awesome: awesome
    }
})

var bar = CustomModules.get('bar')
var foo = CustomModules.get('foo')

console.log(bar.hello('iafine'))
foo.awesome()
