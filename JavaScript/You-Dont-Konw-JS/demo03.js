// function foo() {
//     console.log(this.a);
// }
// var obj = {
//     a: 2
// };
// foo.apply(obj); // 2

// function foo() {
//     console.log(this.a);
// }
// var obj1 = {
//     a: 1,
//     foo: foo
// };
// var obj2 = {
//     a: 2,
//     foo: foo
// };
// var obj3 = {
//     a: 3,
//     foo: foo
// };
// var bar = foo.bind(obj1).bind(obj2).bind(obj3);
// bar() // 1

// function foo(el) {
//     console.log(el, this.id);
// }
// const obj = {
//     id: "awesome"
// };
// // 调用 foo(..) 时把 this 绑定到 obj 
// [1, 2, 3].forEach(foo, obj);    // 1 awesome 2 awesome 3 awesome

// function foo(a) {
//     this.a = a;
// }
// var bar = new foo(2);
// console.log(bar.a); // 2

// function foo() {
//     console.log(this.a);
// }
// var obj1 = {
//     a: 2,
//     foo: foo
// };
// var obj2 = {
//     a: 3,
//     foo: foo
// };
// obj1.foo(); // 2
// obj2.foo(); // 3
// obj1.foo.call(obj2); // 3
// obj2.foo.call(obj1); // 2

// function foo(something) {
//     this.a = something;
// }
// var obj1 = {
//     foo: foo
// };
// var obj2 = {};
// obj1.foo(2);
// console.log(obj1.a); // 2
// obj1.foo.call(obj2, 3);
// console.log(obj2.a); // 3
// var bar = new obj1.foo(4);
// console.log(obj1.a); // 2 
// console.log( bar.a ); // 4

// function foo(something) {
//     this.a = something;
// }
// var obj1 = {};
// var bar = foo.bind(obj1); bar(2);
// console.log(obj1.a); // 2
// var baz = new bar(3);
// console.log(obj1.a); // 2 
// console.log(baz.a); // 3



// function foo() {
//     // 返回一个箭头函数 
//     return (a) => {
//         //this 继承自 foo()
//         console.log(this.a);
//     };

// }
// var obj1 = {
//     a: 2
// };
// var obj2 = {
//     a: 3
// };
// var bar = foo.call(obj1);
// bar.call(obj2); // 2


// var obj = new Object()
// obj.name = 'iafine'
// obj.age = 12

// console.log(typeof null)

// var strPrimitive = "I am a string"; 
// console.log(typeof strPrimitive); // "string" 
// console.log(strPrimitive instanceof String); // false

// var strObject = new String( "I am a string" ); 
// console.log(typeof strObject); // "object"
// console.log(strObject instanceof String); // true

// var strPrimitive = "I am a string";
// console.log(strPrimitive.length); // 13 
// console.log(strPrimitive.charAt(3)); // "m"

// var myObject = {
//     a: 2
// };
// console.log(myObject.a); // 2
// console.log(myObject["a"]); // 2

// var myObject = {};

// myObject[true] = "foo";
// myObject[3] = "bar";
// myObject[myObject] = "baz";

// console.log(myObject["true"]); // "foo"
// console.log(myObject["3"]); // "bar"
// console.log(myObject["[object Object]"]); // "baz"

// var arr = ['Bei', 'Jing']
// console.log(arr['1'])   // Jing

// var prefix = "foo";
// var myObject = {
//     [prefix + "bar"]: "hello",
//     [prefix + "baz"]: "world"
// };
// console.log(myObject["foobar"]); // hello
// console.log(myObject["foobaz"]); // world

// function foo() {
//     console.log("foo");
// }
// var someFoo = foo; // 对 foo 的变量引用
// var myObject = {
//     someFoo: foo
// };
// console.log(foo); // function foo(){..}
// console.log(someFoo); // function foo(){..} 
// console.log(myObject.someFoo); // function foo(){..}

// console.log(foo === someFoo);   // true
// console.log(foo === myObject.someFoo);   // true
// console.log(someFoo === myObject.someFoo);   // true

// var myArray = [ "foo", 42, "bar" ]; 
// myArray.baz = "baz";

// console.log(myArray.length); // 3
// console.log(myArray.baz); // "baz"

// function anotherFunction() { /*..*/ }
// var anotherObject = {
//     c: true
// };
// var anotherArray = [];
// var myObject = {
//     a: 2,
//     b: anotherObject, // 引用，不是复本! 
//     c: anotherArray, // 另一个引用!
//     d: anotherFunction
// };

// var newObj = Object.assign({}, myObject);   // 浅复制

// console.log(newObj.a); // 2
// console.log(newObj.b === anotherObject); // true
// console.log(newObj.c === anotherArray); // true
// console.log(newObj.d === anotherFunction); // true

// anotherArray.push('newValue');
// console.log(anotherArray);  // [ 'newValue' ]
// console.log(myObject.c);    // [ 'newValue' ]
// console.log(newObj.c);  // [ 'newValue' ]

// myObject.a = 3;
// console.log(newObj.a);

// var myObject = {
//     a: 2
// };
// console.log(Object.getOwnPropertyDescriptor(myObject, "a"));    
// // { value: 2, writable: true, enumerable: true, configurable: true }

var myObject = {};
Object.defineProperty(myObject, "a", {
    value: 2,
    enumerable: false
});

Object.defineProperty(myObject, "b", {
    value: 2,
    enumerable: true
});

for ( const el in myObject) {
    console.log(el);
}
// b