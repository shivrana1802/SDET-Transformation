
// JavaScript Basics - Type conversion / coercion

// Type conversion

const num = '25';
console.log(Number(num), typeof Number(num));
console.log(String(num), typeof String(num));


// Type coercion

let num1 = '1' + 1;
console.log(typeof num1);
num1 = num1 - 1;
console.log(num1, typeof num1);
