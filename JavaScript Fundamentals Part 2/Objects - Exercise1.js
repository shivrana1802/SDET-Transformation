// Introduction to objects

// Write a simple object program

const jonas = {
    firstName : 'Jonas',
    age : 30,
    birthYear : 1995,
    friends : ['x','y','z'],
    calcAge : function(birthYear){
        return 2030 - this.birthYear
    },
};
console.log(jonas);

// Dot and bracket notation

console.log(jonas.firstName);
console.log(jonas.calcAge());

console.log(jonas['firstName']);

// Addition of a property

jonas.location = 'US';
console.log(jonas);