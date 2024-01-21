
// Write a function expression to calculate average of 3 numbers using function calling function 

const calcSum = function (num1, num2, num3){
    return num1 + num2 + num3;
}

const calcAverage = function (a,b,c){
    return calcSum(a,b,c)/3;
}

console.log(calcAverage(10,20,30));

// Write an Arrow function to calculate average of 3 numbers using function calling function 

const calcSum1 = (num1, num2, num3) => num1 + num2 + num3;

const calcAverage1 = (a,b,c) => calcSum1(a,b,c)/3;

console.log(calcAverage1(10,10,10));