// Write a program for function accepting callback function

function calcAge(birthYear){
    return 2030 - birthYear;
}

function yearUntilRetirement(age){
    return 60 - age;
}

console.log(yearUntilRetirement(calcAge(1995)));