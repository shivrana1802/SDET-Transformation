// Immediately invoked function expression (IIFE)

//Regular function expression
function calcAge (birthYear){
    return console.log(2025 - birthYear);
}

calcAge(1995);

//IIFE

(function calcAge (birthYear){
    return console.log(2025 - birthYear);
})(1995);