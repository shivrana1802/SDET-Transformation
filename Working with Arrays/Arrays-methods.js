// Array methods

const num = [5,10,15,20,25];

// slice
console.log(num.slice(1));
console.log(num.slice(1, -2));

//splice
console.log(num.splice(3));
console.log(num);

//reverse
console.log(num.reverse());
console.log(num);

//concat
const num2 = [30,40,50];
console.log(num.concat(num2));

//join
console.log(num2.join('-'));
console.log(num2, num);

//At method

console.log(num2[1]);
console.log(num2.at(1));




