// Introduction to Arrays

const num = [10, 20, 30];
const person = ['Jonas', 30, num];
console.log(person);

// Retrieve elements from array

console.log(person[0]);
console.log(person[person.length -1]);
console.log(person.length);

// Basic Array methods

console.log(person.indexOf(30));
console.log(person.includes(30));

person.push('teacher');
console.log(person);

person.unshift(0);
console.log(person);

person.pop();
console.log(person);

person.shift();
console.log(person);