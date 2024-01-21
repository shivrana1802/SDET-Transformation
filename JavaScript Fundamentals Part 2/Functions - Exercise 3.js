// Write a function using different techniques - function declaration, function expression and arrow function

// Function declaration

function calcAge (birthYear){
    return 2024 - birthYear;
}

const age1 = calcAge(1995);
console.log(age1);

// Function expression

const calcAge2 = function (birthYear){
    return 2024 - birthYear;
}

console.log(calcAge2(1995));

// Arrow function

const calcAge3 = (birthYear, currentYear) => {
    return currentYear - birthYear;
    
}
console.log(calcAge3(1995, 2024));


