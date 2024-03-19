// Write a program for calculator using default parameters

function calculator (a,b, operator = 'add'){
    switch(operator){
        case 'add':
            return a+b;
        case 'sub':
            return a-b;
        case 'mul':
            return a*b;
        case 'div':
            return a/b;
    }
}

console.log(calculator(10,10));