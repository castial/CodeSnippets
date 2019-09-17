"use strict";
var isDone = false;
console.log('isDone: ', isDone);
// 数字
var decLiteral = 6;
console.log('decLiteral: ', decLiteral);
// 字符串
var realname = 'iafine';
console.log('realname: ', realname);
// 数组
var list = ['1', '2', '3'];
console.log('list: ', list);
// 元组
var tuple = ['hello', 12, 22];
console.log('tuple: ', tuple);
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color = Color.Red;
console.log('color: ', color);
// Any
var notSure = 4;
notSure = false;
console.log('notSure: ', notSure);
// Void
var unuse = undefined;
console.log('unuse: ', unuse);
// 断言
var value = 'this is a string';
var valueLength = value.length;
console.log('valueLength: ', valueLength);
