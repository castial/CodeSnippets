// var a = 2;
// (function foo(){ // <-- 添加这一行 
//     var a = 3;
//     console.log( a ); // 3 
// })(); // <-- 以及这一行 
// console.log( a ); // 2

// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }
// console.log('final i: ', i)

// const a = ['更新1'].filter(e => e.length > 0).join(';');
// console.log(a);

// function foo() {
//     var a = 2;
//     function bar() {
//         console.log(a);
//     }
//     return bar;
// }
// var baz = foo();
// baz(); // 2 —— 朋友，这就是闭包的效果。
// console.log(a)


// for (let i = 1; i <= 5; i++) {
//     setTimeout(function timer() {
//         console.log(i);
//     }, i * 1000);
// }

// for (var i = 1; i <= 5; i++) {
//     (function () {
//         setTimeout(function timer() {
//             console.log(i);
//         }, i * 1000);
//     })();
// }

// for (var i = 1; i <= 5; i++) {
//     (function (j) {
//         setTimeout(function timer() {
//             console.log(j);
//         }, j * 1000);
//     })(i);
// }

// {
//     let a = 2;
// }
// console.log(a)

// function foo() {
//     var a = 2;
//     function bar() {
//         console.log(a); // 2
//     }
//     bar();
// }
// foo();

// function foo() {
//     var a = 2;
//     function bar() {
//         console.log(a);
//     }
//     return bar;
// }
// var baz = foo();
// baz(); // 2 —— 朋友，这就是闭包的效果。

// function wait(message) {
//     setTimeout(function timer() {
//         console.log(message);
//     }, 1000);
// }
// wait("Hello, closure!");

// for (let i = 1; i <= 5; i++) {
//     setTimeout(function timer() {
//         console.log(i);
//     }, i * 1000);
// }
// for (var i = 1; i <= 5; i++) {
//     (function (j) {
//         setTimeout(function timer() {
//             console.log(j);
//         }, j * 1000);
//     })(i);
// }
// function CoolModule() {
//     var something = "cool";
//     var another = [1, 2, 3];
//     function doSomething() {
//         console.log(something);
//     }
//     function doAnother() {
//         console.log(another.join(" ! "));
//     }
//     return {
//         doSomething: doSomething, doAnother: doAnother
//     };
// }
// var foo = CoolModule(); foo.doSomething(); // cool
// foo.doAnother(); // 1 ! 2 ! 3

// var foo = (function CoolModule() {
//     var something = "cool";
//     var another = [1, 2, 3];
//     function doSomething() {
//         console.log(something);
//     }
//     function doAnother() {
//         console.log(another.join(" ! "));
//     }
//     return {
//         doSomething: doSomething, doAnother: doAnother
//     };
// })();
// foo.doSomething(); // cool
// foo.doAnother(); // 1 ! 2 ! 3


// var MyModules = (function Manager() {
//     var modules = {};
//     function define(name, deps, impl) {
//         for (var i = 0; i < deps.length; i++) {
//             deps[i] = modules[deps[i]];
//         }
//         modules[name] = impl.apply(impl, deps);
//     }
//     function get(name) {
//         return modules[name];
//     }
//     return {
//         define: define,
//         get: get
//     };
// })();

// MyModules.define("bar", [], function () {
//     function hello(who) {
//         return "Let me introduce: " + who;
//     }
//     return {
//         hello: hello
//     };
// });
// MyModules.define("foo", ["bar"], function (bar) {
//     var hungry = "hippo";
//     function awesome() {
//         console.log(bar.hello(hungry).toUpperCase());
//     }
//     return {
//         awesome: awesome
//     };
// });
// var bar = MyModules.get("bar");
// var foo = MyModules.get("foo");
// console.log(
//     bar.hello("hippo")
// ); // Let me introduce: hippo foo.awesome(); // LET ME INTRODUCE: HIPPO

// function identify() {
//     return this.name.toUpperCase();
// }
// function speak() {
//     var greeting = "Hello, I'm " + identify.call(this); console.log(greeting);
// }
// var me = {
//     name: "Kyle"
// };
// var you = {
//     name: "Reader"
// };
// identify.call(me); // KYLE
// identify.call(you); // READER
// speak.call(me); // Hello, 我是 KYLE 
// speak.call( you ); // Hello, 我是 READER

// function identify(context) {
//     return context.name.toUpperCase();
// }
// function speak(context) {
//     var greeting = "Hello, I'm " + identify(context); console.log(greeting);
// }
// var me = {
//     name: "Kyle"
// };
// var you = {
//     name: "Reader"
// };
// identify(you); // READER
// speak(me); //hello, 我是 KYLE

// function foo(num) {
//     console.log("foo: " + num);
//     // 记录 foo 被调用的次数
//     this.count++;
// }
// foo.count = 0;
// var i;
// for (i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo.call( foo, i );
//     }
// }
// // foo: 6
// // foo: 7
// // foo: 8
// // foo: 9
// // foo 被调用了多少次?
// console.log(foo.count); // 4

function foo() {
    var a = 2;
    bar();

    function bar() {
        console.log(a);
    }
}
foo(); // ReferenceError: a is not defined