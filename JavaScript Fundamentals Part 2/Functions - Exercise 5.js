// Write a function for basic calculator functions like addition, subtraction, multiplication,  division

function calculator(a,b,operator){
    switch(operator){
        case 'add':
            return a+b;
            break;
        case 'sub':
            return a-b;
            break;
        case 'mul':
            return a*b;
            break;
        case 'div':
            return a/b;
            break;
    }
}

const calc = calculator(10,10,'add');
console.log(calc);