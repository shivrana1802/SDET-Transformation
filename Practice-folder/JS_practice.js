//Javascript - Javascript is a high level, object oriented, multi paradigm programming language

// Role of JS in web development
//HTML - content of page
//CSS - presentation of content
//JS - Real programming language

//Develop front end apps - modern js libraries  - react,angular,vue
//Develop backend apps - node.js

//linking of a js file to html

/*

<body>
    <script src='example.js'></script>
</body>

// Value - A value is the samllest unit of information. We store the value in a variable.
const firstName = 'Jonas';
const age = 31;

// Variable = A variable is ssomething that store the values
const firstName = 'Jonas';

//Data type - In JS, every value is either an object or a primitive value
//primitive value - const age = 31;
// object 
const me = {
    firstName : 'Jonas',
}

// 7 primitve value - string, number, boolean, undefined, null, bigint, symbol

//commenting -


// typeof operator 

const isJavascriptFun = true;
console.log(isJavascriptFun);
console.log(typeof true);

//3 ways of declaring variables - const, let var

//Basic operators
//Arithmetic operators
console.log(5+10);
console.log(10-5);
console.log(5*10);
console.log(2**3);

//Assignment operator
let x = 10;
x+=10; //20
console.log(x);
x++; //21
console.log(x);
x=+10; //10
console.log(x);
x--; //9
console.log(x);

//comparison operator
console.log(10 > 8);

//string & template literals

const firstName = 'Jonas';
const age = 31;

const jonas = "I'm " + firstName + "," + "a " + age + " year old"

console.log(jonas);

const newJonas = `I'm ${firstName} a ${age} year old engineer`;
console.log(newJonas); 

//multi lines

const jonas = "I'm \n\
engineer";
console.log(jonas);

const newJonas = `I'm 
engineer`;
console.log(newJonas);

// Taking decisions - using if/else statement

if(condition){

}else{

}  

const marks = 85;

if(marks >= 90){
    console.log(`grade A`);
}
else if (marks < 90 && marks >=70){
    console.log(`grade B`);
}
else {
    console.log(`grade C`);
}

//type conversion - manually converting data type in code through functions

let num = "10";
console.log(typeof num);
console.log(typeof Number(num));

//type coercion - automatically converting data type in code

let sum = "20" + 5;
console.log(sum);
console.log(typeof sum);

sum = sum + 1;
console.log(sum);
console.log(typeof sum);

let n = '1' + 1;
n = n -1;
console.log(n);
console.log(typeof n);

//falsy values = 0 , '' , null, undefined , nan
console.log(Boolean(0));

//equality operator (strict ===, loose ==)
//inequality operator (strict !== , loose !=)  

//Boolean logic - with logical operator &&, ||, !

const hasDrivingLicense = true;
const hasGoodvision = true;
const isTired = false;

if(hasDrivingLicense && hasGoodvision && !isTired){
    console.log(`sarah can drive`);
}
else{
    console.log(`sarah can't drive`);
}

//Switch statement

switch(){
    case1'':
    break;
    case2'':
    break;
    default:
}  

const day = 'tue';
switch(day){
    case'mon':
    console.log(`true`);
    break;
    default:
    console.log(`false`);
}

function calculator (a,b,operation){
    switch(operation){
        case 'add':
            return a+b;
        case 'sub':
            return a-b;
        case 'mul':
            return a*b;
        default:
            console.log(`invalid operation`);
    }
}

console.log(calculator(10,10,'sub'));

//conditional ternary operator

const age = 18;
age >=18 ? console.log(`adult`) : console.log(`minor`);
const ab = age>=18 ? 'adult' : 'minor';
console.log(ab);

console.log(`i am a ${age>=18 ? 'adult' : 'minor'}`);

//JS fundamentals part-2

// 'use strict';

//functions -In JS, functions are just values

function fruitProcessor (apple, orange){
    const juice = `juice of ${apple} apples and ${orange} oranges`;
    return juice;
}

console.log(fruitProcessor(5,4));
const fruitjuice = fruitProcessor(7,8);
console.log(fruitjuice);

//function declaration

function calcAge(birthYear){
    return 2024 - birthYear;
}

console.log(calcAge(1993));
const age = calcAge(1993);
console.log(age);

//function expression
const calcAge2 = function(birthYear){
    return 2024 - birthYear;
}
console.log(calcAge2(1994));

//arrow function

const calcAge3 = birthYear => 2024 - birthYear;
console.log(calcAge3(1995));

const yearsUntilRetirement = (birthYear,firstName) => {
    const age = 2024 - birthYear;
    const retirement = 60 - age;
    return `${firstName} is retiring in ${retirement} years`;
}

console.log(yearsUntilRetirement(1999, 'Jonas'));

//function calling other function

function fruitCutter(fruit){
    return fruit*5;
}

function fruitJuice(apples, oranges){
    const applePieces = fruitCutter(apples);
    const orangePieces = fruitCutter(oranges);
    return `fruit juice of ${applePieces} apples and ${orangePieces} oranges`;
}

console.log(fruitJuice(4,5));  

//Arrays
const friends = ['Jonas', 'Jay', 'Sam'];
console.log(friends);

const friends2 = new Array(1995,1997,1999);
console.log(friends2);

console.log(friends2[0]);
console.log(friends2[1]);
console.log(friends2[friends2.length-1]);
console.log(friends2.length);

friends2[1] = 'Jon';
console.log(friends2);

const jonas = ['Jonas', 2024 - 1994, 'Teacher', friends];
console.log(jonas);

//example
const calcAge = function(birthYear){
    return 2024 - birthYear;
}

const years = [1993, 1995, 1999];

console.log(calcAge(years[0]));
console.log(calcAge(years[1]));

//using for loop

for(i=0; i<years.length;i++){
    console.log(calcAge(years[i]));
}

//Basic array operations (methods)
const friends3 = ['Jonas', 'Jay', 'Sam'];
friends3.push('Jon');
friends3.unshift('Mat');
console.log(friends3);
friends3.pop();
console.log(friends3);
friends3.shift();
console.log(friends3);
console.log(friends3.includes('Mat'));
console.log(friends3.includes('Jay'));
console.log(friends3.indexOf('Jay'));

if(friends3.includes('Jay')){
    console.log(`you have a friend`);
}  

//Objects

const jonas = [
    'Jonas',
    31,
    'Teacher',
    ['Jon','Sam','Tom']
];

const newJonas = {
    firstName : 'Jonas',
    birthYear: 1994,
    job: 'teacher',
    friends: ['Jon','Sam','Tom'],
    calcAge: function(){
        return 2024 - this.birthYear;
    }
};

console.log(newJonas.firstName);
console.log(newJonas['age']);

newJonas.location = 'USA';
console.log(newJonas);

console.log(newJonas.calcAge());

// Loops - For loop

for(let i=0; i< 5; i++){
    console.log(`hi there.....${i}`);
}

//Looping arrays, continue  and break statement
const jonas = [
    'Jonas',
    31,
    'Teacher',
    ['Jon','Sam','Tom']
];

const types = [];
for(i=0;i<jonas.length;i++){
    // console.log(jonas[i]);
    // // types[i] = typeof jonas[i];
    // types.push(typeof jonas[i]);

    // if(typeof jonas[i] !== 'string') continue;

    if(typeof jonas[i] !== 'string') break;
    types.push(typeof jonas[i]);
}

console.log(types);

//looping backwards

for(i=10; i>1;i--){
    console.log(`hi there.....${i}`)
}

//loops in loops

for(let i =1;i<6;i++){
console.log(`exercise number ${i}`);

for(let rep = 1;rep<6;rep++){
        console.log(`rep number ${rep}`);
    }
}

//while loop

let rep = 1;
while(rep < 10){
    console.log(`hi there ${rep}`);

rep++;
}  

//How JS works behind the scenes

//this keyword/variable

const jonas = {
    firstName: 'Jonas',
    birthYear: 1999,
    calcAge: function(){
        return 2024 - this.birthYear;
    },
};

const matilda = {
    firstName: 'Matilda',
    birthYear: 2001,
};

matilda.calcAge = jonas.calcAge;
console.log(matilda.calcAge());

//primitives vs objects

let age = 31;
const oldAge = age;
age = 30;

console.log(age,oldAge);


const me = {
    firstName: 'Jon',
    age: 30,
};

const friends = me;
friends.age = 27;

console.log(me.age);
console.log(friends.age);

//Data structures, modern operators and strings

//short circuiting - OR

console.log('Jonas' || 0);
console.log('' || 0);
console.log('' || 1);

// AND

console.log(0 && '');
console.log(1 && 0);
console.log(undefined && null);

// Looping arrays - For-of loop

const num = [5,10,15,20,25];

for(const n of num){
    console.log(n);
}

for(const n of num.entries()){
    console.log(n);
}
for(const [i, el] of num.entries()){
    console.log(`${i} : ${el}`);
}   

//Working with strings

const airline = 'AIR INDIA';
console.log(airline[0]);
console.log(airline[5]);
console.log(airline.length);
console.log('A320'[1]);

//STRING METHODS

console.log(airline.indexOf('I'));
console.log(airline.lastIndexOf('I'));
console.log(airline.slice(4));
console.log(airline.slice(0,4));
console.log(airline.slice(0,airline.indexOf(' ')));

//check if a passenger got a middle seat

function checkMiddleSeat(seat){
    const s = seat.slice(-1);
    if (s === 'E' || s === 'B'){
        console.log(`got a middle seat`);
    }
    else{
        console.log(`got lucky`);
    }
}

checkMiddleSeat('23E');
checkMiddleSeat('3A');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());  

const email = 'xyz@gmail.com \n';
console.log(email.trim());

const us = '28.00 $';
const gb = us.replace('$', '#').replace('.',',');
console.log(gb);

const ann = 'the door is an open door';
console.log(ann.replace(/door/g,'gate'));

console.log(ann.includes('open'));
console.log(ann.startsWith('the'));
console.log(ann.endsWith('door'));

const airline = 'AIR INDIA ';
console.log(airline.split(' '));
const split = airline.split(' ');
const join = split.join(' ');
console.log(join);

console.log(airline.padStart(15, '*').padEnd(20,'*'));

console.log(airline.repeat(5));  

//Enhanced Object literals (ES6)

const restaurant = {
    name: 'DOMINOS',
    location: 'DELHI 61',
    mainMenu: ['Pizza','BREAD','PEPSI','CAKE'],
    openingHours: {
        mon: {
            open: 12,
            close: 22,
        },
        tues: {
            open: 12,
            close: 22,
        },
        wed: {
            open: 12,
            close: 22,
        },
        thurs: {
            open: 12,
            close: 22,
        },
        
    },
    // order: function(mainMenuIndex){
    //     return this.mainMenu[mainMenuIndex];
    // },
    order(mainMenuIndex){
        return this.mainMenu[mainMenuIndex];
    },
};

const order = restaurant.order(0);
console.log(order);
console.log(restaurant.openingHours.mon);

//Object literal easier

// Object outside of object

const openingHours = {
    mon: {
        open: 12,
        close: 22,
    },
    tues: {
        open: 12,
        close: 22,
    },
    wed: {
        open: 12,
        close: 22,
    },
    thurs: {
        open: 12,
        close: 22,
    },
    
};

const restaurant2 = {
    name: 'PIZZA HUT',
    openingHours,
};

console.log(restaurant2.openingHours);

//writing a method - we don't need to use function expression

// order(mainMenuIndex){
//     return this.mainMenu[mainMenuIndex];
// },

//we can compute property names

const days = ['mon','tues', 'wed','thurs'];

const openingHoursNew = {
    [days[0]]: {
        open: 12,
        close: 22,
    },
    [days[1]]: {
        open: 12,
        close: 22,
    },
    [days[2]]: {
        open: 12,
        close: 22,
    },
    [days[3]]: {
        open: 12,
        close: 22,
    },
    
};

console.log(openingHoursNew.mon);

//Data structure - Sets

const orderSet = new Set(['Pizza', 'Pasta','Pizza','Pasta','Bread']);
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Burger'));
orderSet.add('Chinese');
console.log(orderSet);
orderSet.delete('Bread');
console.log(orderSet);

//looping  arrays withSets - using for of loop

for(const order of orderSet){
    console.log(order);
}  

//Data structure - maps

const newMap = new Map();
newMap.set('name', 'Jonas');
newMap.set(1,'Teacher');
newMap.set(true, 'License');
console.log(newMap);

console.log(newMap.get('name'));
console.log(newMap.size);
console.log(newMap.has('name'));
newMap.delete(1);
console.log(newMap);
newMap.clear();
console.log(newMap);

const map2 = new Map([
    ['name','Jonas'],
    [1, 'Teacher'],
]);
console.log(map2);

//converting object to map

const restaurant2 = {
    name: 'PIZZA HUT',
    location: 'DELHI',
};
console.log(Object.entries(restaurant2));

const restMap = new Map(Object.entries(restaurant2));
console.log(restMap);  

//Looping objects - keys, values and entries

const jonas = {
    name: 'Jonas',
    age: 31,
    job: 'Teacher',
    friends: ['Tom','Dan'],
};

const keys = Object.keys(jonas);
console.log(keys);

for(const n of keys){
    console.log(n);
}

const values = Object.values(jonas);
console.log(values);

for(const n of values){
    console.log(n);
}

const entry = Object.entries(jonas);
console.log(entry);

for(const n of entry){
    console.log(n);
}  

//Working with arrays - array methods

const num = [5,10,15,20,25];
console.log(num.slice(1));
console.log(num.slice(1,3));
console.log(num.slice(1,-2));

const num2 = [5,10,15,20,25];
console.log(num2.splice(1,3));
console.log(num2);

const num3 = [5,10,15,20,25];
console.log(num3.reverse());
console.log(num3);

console.log(num.concat(num2,num3));

console.log(num3.join('*'));

const num4 = [5,10,15,20,25];
console.log(num4[0]);
console.log(num4.at(0));
console.log(num4.at(-1));  

//Working with Arrays - for each loop

const num = [5,10,15,20,25];

num.forEach(function(value){
    console.log(value);
})

num.forEach(function(value, index, array){
    console.log(`${index} : ${value}`);
})

//Working with maps - for each loop

const newMap = new Map([
    ['name', 'Jonas'],
    ['age', 31],
    [1, 'Programmer']
]);

newMap.forEach(function(value){
    console.log(value);
})

newMap.forEach(function(value, key, map){
    console.log(`${key} : ${value}`);
})

//Working with sets - for each loop

const Sets = new Set(['Pizza', 'Pasta', 'Pizza', 'Bread']);

Sets.forEach(function(value, value, set){
    console.log(`${value} : `);
})  

//A closer look at functions

//Default Parameters

const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199*numPassengers){

    const booking = {
        flightNum,
        numPassengers,
        price,
    };

    console.log(booking);
    bookings.push(booking);
}

createBooking('AI239');
createBooking('AI239', 5);
console.log(bookings);

//How passing arguments works?

//Primitive type vs reference type

'use strict';
const flight = 'LH222';

const jonas = {
    name : 'Jonas',
    passport : 'PP123456',
};

const checkIn = function(flightNum,passenger){
    flightNum = 'LHS55',
    passenger.name = 'Mr. ' + passenger.name;
}

checkIn(flight, jonas);

console.log(flight);
console.log(jonas.name);

//First class functions

//functions are values. Functions are another type of Object

//stores functions in variables or properties

const add = (a,b) => a+b;
console.log(add(2,3));

const jonas = {
    name: 'Jonas',
    calcAge: function(birthYear){
        return 2024 - birthYear;
    }
}  

//pass function as argument to other function

const greet = function(){
    console.log(`hi there`);
}
addEventListener('click', greet());  

//function returning another function

function greet(name){
    return function(){
        console.log(`hi ${name}`);

    }
}
const greeting = greet('Jonas');
greeting();

function count(){
    let counter = 0;
    return function(){
        counter++;
        console.log(counter);
    }
}
const fun = count();
fun();

//function accepting callback function

const oneWord = function(str){
    return str.replace(/ /g,'');
}

const upperFirstWord = function(str){
    const lower = oneWord(str).toLowerCase();
    return lower[0].toUpperCase() + lower.slice(1);
}

const transformer = function(str, fn){
    console.log(`original : ${str}`);
    console.log(`first transformation : ${fn(str)}`);
}

transformer('This is the string', oneWord);
transformer('This is the string', upperFirstWord);  

//JS callbacks with for each loop

const hello = function(){
    console.log(`hello`);
}

const friends =['Jonas', 'Tom', 'Dan'];
friends.forEach(hello);


const greet = function(greeting){
    return function(name){
        console.log(`${greeting} : ${name}`);
    }
}

const greeter = greet('hi');
greeter('Jonas');

//Function methods 

//Call, apply, bind method

const airIndia = {
    name: 'Air India',
    code: 'AI',
    bookings: [],
    book: function(flightNum,passenger){
        console.log(`${passenger} with flight number ${flightNum}${this.code} booked `);
        this.bookings.push(flightNum);
    }
}

airIndia.book(4545, 'Jonas');

const indigo = {
    name: 'Indigo',
    code: 'IG',
    bookings: [],
}

const book = airIndia.book;

book.call(indigo, 555, 'Marni');

book.apply(indigo, [777, 'Tom']);

const booking = book.bind(indigo, 999, 'Jon');
booking();

//Partial application

const addTax = (value, rate) => {
    return (rate*value)/100;
}

const tax = addTax.bind(null, 200, 0.25);
console.log(tax());

//IIFE - Immediately invoked function expression

(function greet(){
    console.log(`hi there`);
})();

(() => {
    console.log(`hi there`);
})();

//Closures

const count = function(){
    let counter = 0;
    return function(){
        counter++;
        console.log(counter);
    }
}

const closure = count();
closure();
closure();
closure();  

//OOP in Javascript - There are 3 ways to implement prototypal inheritance

// 1. constructor functions - 

const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;

Person.prototype.calcAge = function(){
    return 2024 - this.birthYear;
}

}

const jonas = new Person('Jonas', 1994);
console.log(jonas);
console.log(jonas.calcAge());

console.log(jonas instanceof Person);
console.log(jonas.__proto__ === Person.prototype);

//ES6 classes

class PersonCl {
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge(){
        return 2024 - this.birthYear;
    }

    greet(){
        console.log('hi there');
    }
}


const margo = new PersonCl('Margo', 1994);
console.log(margo);
console.log(margo.calcAge());
margo.greet();  

//Object.create

const PersonProto = {
    calcAge(){
        return 2024 - this.birthYear;
    },

    greet(){
        console.log('hi there');
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
}


const steve = Object.create(PersonProto);
console.log(steve);
steve.init('Steve', 2004);
console.log(steve.calcAge());
steve.greet();


//Inheritance between classes : constructor functions

const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function(){
    return 2024 - this.birthYear;
}

const Student = function(firstName, birthYear, course){
    Person.call(this, firstName, birthYear);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.greet = function(){
    console.log(`hi there ${this.firstName}`);
}

const jon = new Student('Jon', 1995, 'CS');
console.log(jon);
console.log(jon.calcAge());
jon.greet();  

//Inheritance between classes : ES6 classes

class PersonCl {
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge(){
        return 2024 - this.birthYear;
    }
}

class StudentCl extends PersonCl{
    constructor(firstName, birthYear, course){
        super(firstName,birthYear);
        this.course = course;
    }

    greet(){
        console.log(`hi there ${this.firstName}`);
    }
}

const jonas = new StudentCl('Jonas', 1995, 'CS');
console.log(jonas);
jonas.greet();
console.log(jonas.calcAge());  

//Encapsulation : protected properties & methods

class Account{
    constructor(firstName, birthYear, course, job){
        this.firstName = firstName;
        this.birthYear = birthYear;
        this._course = course;
        this._job = job;
    }

    calcAge(){
        return 2024 - this.birthYear;
    }

    _greet(){
        console.log(`${this._job}`);
    }
};

const acc1 = new Account('Jonas', 1995, 'CS', 'teacher');
console.log(acc1);
console.log(acc1._course);

//Encapsulation : private class fields & methods

class Account2 {
    age = 31;

    #pin;
    #movement;

    constructor(pin, currency){
        this.#pin = pin;
        this.currency = currency;
    }

    calcAge(){
        return this.#pin;
    }

    #approveLoan(){
        return this.#movement;
    }
}

const acc2 = new Account2(1111, 'rupee');
console.log(acc2.age);
// console.log(acc2.#approveLoan());
console.log(acc2.calcAge());  */


