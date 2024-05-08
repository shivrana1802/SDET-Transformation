/* practice session - JS Part 1

Javascript is a high-level object oriented multi paradigm programming language

Values and variabes

const firstName = 'Shiv';
const age = 35;
const isAEngineer = true;
const last_name = 'Rana';

console.log(last_name);

Data types
primitive
const firstName = 'Shiv';
object
const me = {
    firstName : 'Shiv';
};

primitive data types - string, number, boolean, undefined, null, symbol, BigInt

In JS, value has the data type and not the variable  

//commenting in JS - 
multi line /* ........
// single line  

// Boolean
const javascriptIsFun  = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);  

// 3 ways of declaring variables in JS - const , let, var

let age = 30;
    age = 40;
    console.log(age);

const firstName = 'Shiv'; 

// basic operators

// mathematical operator (+,-,*,/, x*y);

const now = 2024;
const ageJonas = now - 1995;
console.log(ageJonas);

const jonas = 'Jonas' + ' ' + 'Jonas';
console.log(jonas);  

//assignment operator
let x = 10;
x+= 10;
x++;
x--;
console.log(x);

//comparison operator
console.log(ageJonas > 18);  

//string & template literals
const firstName = 'Shiv';
const lastName = 'Rana';

const fullName = firstName + ' ' + lastName ;
console.log(fullName);

console.log(`Shiv Rana`);
console.log(`${firstName} ${lastName}`);

//multi line string

console.log('hey there \n\
hey \n\
there');

console.log(`hey there
hey
there`); 

// taking decisions - if/else statements

if(condition)
{

}
else
{

}  

const age = 18;
if(age >= 18){
    console.log(`you can vote`);
}  

// type conversion/coercion

const age = '18';
console.log(typeof Number(age));

//falsy values
console.log(Boolean(0));
console.log(Boolean(1));  

let money;
if(money){
    console.log(`xyz`);
}
else{
    console.log(`no money`);
}  

const favourite = 50;
console.log(favourite);

if(favourite === 100){
    console.log(`${favourite} is an amazing number`);
}
else if (favourite === 50){
    console.log(`${favourite} is an amazing number`);
}

//Boolean logic & logocal operator(&&, ||, !)

//the switch staement

switch(){
    case1 :
    break;
    case2 :
    break;
}  

const day = 'tuesday';
switch(day){
    case 'monday':
    console.log(`${day}`);
    break;
    case 'tuesday':
    console.log(`${day}`);
    break;
    default:
    console.log(`${day} is fun`);
}

//condition ternary operator

const age = 18;
age >= 18 ? console.log('wine') : console.log('water');

console.log(`${age >= 18 ? 'wine' : 'water' }`);  */

// Practice session  - JS Part 2// 

/* // 'use strict'

// Functions

function logger(){
    console.log(`this is function`);
}

logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const fruitJuice = fruitProcessor(5,6);
console.log(fruitJuice);  

// function delcaration

function calcAge(birthYear){
    return console.log(2025 - birthYear);
}

calcAge(1995);

// function expression

const calcAge2 = function(birthYear){
    return 2025 - birthYear;
}

console.log(calcAge2(1996));

// arrow function

const calcAge3 = birthYear => 2025 - birthYear;
console.log(calcAge3(1997));

// function calling other function

const retirement = function(birthYear){
    const age = calcAge2(birthYear);
    const retirement = 65 - age;
    return retirement;
}

console.log(retirement(1996));  

//Arrays 

const friends = ['Steven', 'Marsh','Jonas'];
console.log(friends);

console.log(friends[0], friends[1], friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';

console.log(friends);

const jonas = ['Jonas', 25, friends, 'teacher'];
console.log(jonas);

function calcAge(birthYear){
    return 2025 - birthYear;
}

const year = [1999, 1998, 1995];

const age = [calcAge(year[0]), calcAge(year[1]), calcAge(year[2])];
console.log(age);  

//array methods

const friends = ['Steven', 'Marsh','Jonas'];
friends.push('Jay');
friends.pop();
friends.unshift('Pal');
friends.shift();
console.log(friends);

console.log(friends.includes('Steven'));
console.log(friends.indexOf('Steven')); 

// Objects

// const jonas = {
//     firstName : 'Jonas',
//     birthYear : 1991,
//     job : 'teacher',
//     friends : ['Steven', 'Marsh','Jonas'],
//     calcAge : function(){
//         this.age =  2025 - this.birthYear;
//         return this.age;
//     }
// };

// console.log(jonas, jonas.firstName, jonas['job']);
// jonas.location = 'US';

// console.log(jonas);

// //object methods

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas);

//The for loop

for(let i=0; i<4;i++){
    console.log(`hi there ${i}`);
}

const friends = ['Steven', 'Marsh','Jonas'];
const type = [];
for(i=0; i<friends.length;i++){
    console.log(friends[i]);
    type.push(typeof friends[i]);
}

console.log(type);  

//Continue and break

const jonas = [
    'Jonas',
    'teacher',
    1992
];

for(i=0;i<jonas.length; i++){
    if(typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}

// looping backwards

for(i=jonas.length-1;i>=0;i--){
    console.log(jonas[i]);
}


//while loop

let rep = 1;
while(rep<=10){
    console.log(`hi there ${rep}`);
    rep++;
}   

//Data structures

//short circuiting

console.log(3 || 'Jon');
console.log(5 || '');
console.log(0 || 'Jon');
console.log('' || 0);

console.log(0 && 5);
console.log(0 && '');
console.log(4 && 5);  

//for-of-loop

const fruit = ['apple', 'orange', 'grape', 'mango'];
for(const [i, el] of fruit.entries()){
    console.log(`${i} : ${el}`);
}

//Working with strings

const airline = 'Air Portugal';
console.log(airline[0]);
console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.slice(5));  


const checkMiddleSeat = function(seat){
    const s  = seat.slice(-1);
    if(s === 'B' || s === 'E'){
        console.log('you got a middle seat');
    }
    else{
        console.log('you are lucky');
    }
}

checkMiddleSeat('20B');
checkMiddleSeat('20A');  

const airline = 'Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const airline2 = 'Air Portugal \n';
console.log(airline2.trim());
console.log(airline2.replace('Air', 'Flight'));
console.log(airline2);

console.log(airline2.includes('Air'));
console.log(airline2.startsWith('Air'));  


const airline3 = 'portugal Air Flight';
const split = airline3.split(' ');
console.log(split);

for(const x of split){
    console.log(x);
}

console.log(split.join('-'));

console.log(airline3.padStart(25, '*').padEnd(45,'*'));

console.log(airline3.repeat(5));  

//Sets

const order = ['Pizza','Pasta','Pizza','Pasta','Burger'];
const orderSet = new Set(order);
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
orderSet.add('Bread');
orderSet.delete('Pasta');
orderSet.clear();
console.log(orderSet);

for(const x of orderSet){
    console.log(x);
}  

//Maps

const restaurant = new Map();
restaurant.set('name' , 'BurgerKing');
restaurant.set('veg', true);
restaurant.set(1, 'NYC');
restaurant.set(2, 'LA');

console.log(restaurant.get('name'));
console.log(restaurant.size);
console.log(restaurant.delete(2));
console.log(restaurant);  

const jonas = {
    firstName : 'Shiv',
    age: 18,
}

const jonasMap = new Map(Object.entries(jonas));
console.log(jonasMap);

const keys = Object.keys(jonas);
console.log(keys);

const values = Object.values(jonas);
console.log(values);

const entry = Object.entries(jonas);
console.log(entry);  


//Arrays: simple array methods:

const arr = ['a','b','c','d','e'];

//slice
console.log(arr.slice(2,4));

//splice
console.log(arr.splice(3));
console.log(arr);

console.log(arr.reverse());
console.log(arr);

const arr2 = [1,2,3,4,5];
console.log(arr.concat(arr2));

console.log(arr2.join('*'));

console.log(arr2.at(3));  

//foreach loop with array

const fruits = ['apple','mango','orange'];

fruits.forEach(function(value){
    console.log(value);
})

fruits.forEach(function(value, index, array){
    console.log(`${index} : ${value}`);
})

//for each loop with sets
const fruits2 = new Set(['apple','mango','orange','apple']);

fruits2.forEach(function(value, value, set){
    console.log(`${value}`);
})

//for each loop with maps
const fruits3 = new Map([
    [1,'apple'],
    [2,'mango'],
    [3,'orange'],
]);

fruits3.forEach(function(value, key, maps){
    console.log(`${key} : ${value}`); 
})  

//Functions

//default parameters

const bookings = [];

const createBooking = function(flightNum, passengers = 2, price = 199 * passengers){

    const booking = {
        flightNum,
        passengers,
        price,
    }

    console.log(booking);
    bookings.push(booking);

}

createBooking('LHS');
createBooking('LHS', 5  );
console.log(bookings);  

//passing arguments objects vs value

const flight = 'LHS';
const jonas = {
    name: 'Jonas',
    passport: 123456,
}

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;
    console.log(flightNum);
}

checkIn(flight, jonas);
console.log(flight, jonas);

//function accepting callback function

function calcAge(year){
    return 2035 - year;
}

function retirement(age){
    return 65 - age;
}

console.log(retirement(calcAge(1995)));


//function returning functions

function greet(){
    return function(){
        console.log(`hey there`);
    }
}

const greeting = greet();
greeting();  

//call , apply and bind method

const airIndia = {
    code: 'AI',
    flightnum: 555,
    book(){
        console.log(`passenger booked ${this.code}${this.flightnum}`);
    },
}

const airAsia = {
    code: 'AA',
    flightnum: 5856,
}

const booking = airIndia.book;

booking.call(airAsia);
console.log(airAsia);

booking.apply(airAsia);

const asiaBooking = booking.bind(airAsia);
asiaBooking();

const addTax = (value, rate) => value + value * rate;

const addVat = addTax.bind();
console.log(addVat(100, 2)); 

//IIFE

// function hey(){
//     console.log('hey there');
// }

(function(){
    console.log('hey there');
})();

//closures

const secureBooking = function(){
    let counter = 0;
    return function(){
        counter++;
        console.log(`value is ${counter}`);
    }
}

const booking = secureBooking();
booking();
booking();  

// Object oriented programming - constructor function

const Person = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.calcAge = function(){
    console.log (2035 - 1995);
}

const steve = new Person('Steve','Marsh');
console.log(steve);
steve.calcAge();  */

//es6 classes

class PersonCl {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    calcAge(){
        console.log (2035 - 1995);
    }
}

class StudentCl extends PersonCl{
    constructor(firstName,lastName,course){
        super(firstName,lastName);
        this.course = course;
    }
}

const steve = new StudentCl('Steve','Marsh','CS');
console.log(steve);
steve.calcAge();



























