//Write a program for forEach loop with sets

const num = new Set([5,10,5,15,10,20,15,20]);
console.log(num);

num.forEach(function(value, i, set){
    console.log(` ${value}`);
})