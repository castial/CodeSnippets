// // var a = 2;
// // (function foo(){ // <-- 添加这一行 
// //     var a = 3;
// //     console.log( a ); // 3 
// // })(); // <-- 以及这一行 
// // console.log( a ); // 2

// // for (var i = 0; i < 10; i++) {
// //     console.log(i)
// // }
// // console.log('final i: ', i)

// // const a = ['更新1'].filter(e => e.length > 0).join(';');
// // console.log(a);

// // function foo() {
// //     var a = 2;
// //     function bar() {
// //         console.log(a);
// //     }
// //     return bar;
// // }
// // var baz = foo();
// // baz(); // 2 —— 朋友，这就是闭包的效果。
// // console.log(a)


// // for (let i = 1; i <= 5; i++) {
// //     setTimeout(function timer() {
// //         console.log(i);
// //     }, i * 1000);
// // }

// // for (var i = 1; i <= 5; i++) {
// //     (function () {
// //         setTimeout(function timer() {
// //             console.log(i);
// //         }, i * 1000);
// //     })();
// // }

// // for (var i = 1; i <= 5; i++) {
// //     (function (j) {
// //         setTimeout(function timer() {
// //             console.log(j);
// //         }, j * 1000);
// //     })(i);
// // }

// // {
// //     let a = 2;
// // }
// // console.log(a)

// // function foo() {
// //     var a = 2;
// //     function bar() {
// //         console.log(a); // 2
// //     }
// //     bar();
// // }
// // foo();

// // function foo() {
// //     var a = 2;
// //     function bar() {
// //         console.log(a);
// //     }
// //     return bar;
// // }
// // var baz = foo();
// // baz(); // 2 —— 朋友，这就是闭包的效果。

// // function wait(message) {
// //     setTimeout(function timer() {
// //         console.log(message);
// //     }, 1000);
// // }
// // wait("Hello, closure!");

// // for (let i = 1; i <= 5; i++) {
// //     setTimeout(function timer() {
// //         console.log(i);
// //     }, i * 1000);
// // }
// // for (var i = 1; i <= 5; i++) {
// //     (function (j) {
// //         setTimeout(function timer() {
// //             console.log(j);
// //         }, j * 1000);
// //     })(i);
// // }
// // function CoolModule() {
// //     var something = "cool";
// //     var another = [1, 2, 3];
// //     function doSomething() {
// //         console.log(something);
// //     }
// //     function doAnother() {
// //         console.log(another.join(" ! "));
// //     }
// //     return {
// //         doSomething: doSomething, doAnother: doAnother
// //     };
// // }
// // var foo = CoolModule(); foo.doSomething(); // cool
// // foo.doAnother(); // 1 ! 2 ! 3

// // var foo = (function CoolModule() {
// //     var something = "cool";
// //     var another = [1, 2, 3];
// //     function doSomething() {
// //         console.log(something);
// //     }
// //     function doAnother() {
// //         console.log(another.join(" ! "));
// //     }
// //     return {
// //         doSomething: doSomething, doAnother: doAnother
// //     };
// // })();
// // foo.doSomething(); // cool
// // foo.doAnother(); // 1 ! 2 ! 3


// // var MyModules = (function Manager() {
// //     var modules = {};
// //     function define(name, deps, impl) {
// //         for (var i = 0; i < deps.length; i++) {
// //             deps[i] = modules[deps[i]];
// //         }
// //         modules[name] = impl.apply(impl, deps);
// //     }
// //     function get(name) {
// //         return modules[name];
// //     }
// //     return {
// //         define: define,
// //         get: get
// //     };
// // })();

// // MyModules.define("bar", [], function () {
// //     function hello(who) {
// //         return "Let me introduce: " + who;
// //     }
// //     return {
// //         hello: hello
// //     };
// // });
// // MyModules.define("foo", ["bar"], function (bar) {
// //     var hungry = "hippo";
// //     function awesome() {
// //         console.log(bar.hello(hungry).toUpperCase());
// //     }
// //     return {
// //         awesome: awesome
// //     };
// // });
// // var bar = MyModules.get("bar");
// // var foo = MyModules.get("foo");
// // console.log(
// //     bar.hello("hippo")
// // ); // Let me introduce: hippo foo.awesome(); // LET ME INTRODUCE: HIPPO

// // function identify() {
// //     return this.name.toUpperCase();
// // }
// // function speak() {
// //     var greeting = "Hello, I'm " + identify.call(this); console.log(greeting);
// // }
// // var me = {
// //     name: "Kyle"
// // };
// // var you = {
// //     name: "Reader"
// // };
// // identify.call(me); // KYLE
// // identify.call(you); // READER
// // speak.call(me); // Hello, 我是 KYLE 
// // speak.call( you ); // Hello, 我是 READER

// // function identify(context) {
// //     return context.name.toUpperCase();
// // }
// // function speak(context) {
// //     var greeting = "Hello, I'm " + identify(context); console.log(greeting);
// // }
// // var me = {
// //     name: "Kyle"
// // };
// // var you = {
// //     name: "Reader"
// // };
// // identify(you); // READER
// // speak(me); //hello, 我是 KYLE

// // function foo(num) {
// //     console.log("foo: " + num);
// //     // 记录 foo 被调用的次数
// //     this.count++;
// // }
// // foo.count = 0;
// // var i;
// // for (i = 0; i < 10; i++) {
// //     if (i > 5) {
// //         foo.call( foo, i );
// //     }
// // }
// // // foo: 6
// // // foo: 7
// // // foo: 8
// // // foo: 9
// // // foo 被调用了多少次?
// // console.log(foo.count); // 4

// function foo() {
//     var a = 2;
//     bar();

//     function bar() {
//         console.log(a);
//     }
// }
// foo(); // ReferenceError: a is not defined


// const mystring = "jb51.net,google.com,baidu.com_weibo.com_haotu.net";
// const myarray = mystring.split(/[,_.]/);
// console.log(myarray)

// console.log(1);
// setTimeout(() => {
//   console.log(2);
//   Promise.resolve().then(() => {
//     console.log(3)
//   });
// });
// new Promise((resolve, reject) => {
//   console.log(4)
//   resolve(5)
// }).then((data) => {
//   console.log(data);
// })
// setTimeout(() => {
//   console.log(6);
// })
// console.log(7);

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const sara = Person('sfaree', 'dkdss')
// console.log(global.firstName);

// var status = '123';
// setTimeout(() => {
//   const status = '456';

//   const data = {
//     status: '789',
//     getStatus() {
//       return this.status;
//     }
//   }

//   console.log(data.getStatus())
//   console.log(data.getStatus.call(this))
// })

// console.log(1.1 + 1.2 == 1.3)
// let a1 =  ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
// let a2 = ['A', 'B', 'C', 'D'].map((item) => {
//   return item + 3
// })
// console.log(a2)

// let a3 = [...a1, ...a2].sort().map((item) => {
//   if(item.includes('3')){
//     return item.split('')[0]
//   }
//   return item
// })
// console.log(a3)

// console.log([3, 15, 8, 29, 102, 22].sort())

// var obj = {
//     '2': 3,
//     '3': 4,
//     'length': 2,
//     'splice': Array.prototype.splice,
//     'push': Array.prototype.push
// }
// obj.push(1)
// obj.push(2)
// console.log(obj)

// const data = {
//     1: 222,
//     2: 123,
//     3: 888
// }

// const result = []
// for (const i in 10) {
//     console.log(i)
// }
