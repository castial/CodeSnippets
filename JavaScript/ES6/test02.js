var a = 2;
function foo() { // <-- 添加这一行
    var a = 3; 
    console.log(a); // 3
} // <-- 以及这一行 
foo(); // <-- 以及这一行
console.log(a); // 2
