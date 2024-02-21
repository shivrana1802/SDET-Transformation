// write a program to loop arrays

const jonas = ['Jonas', 1995, 'Teacher', 'KIA'];

for(i=0; i< jonas.length; i++){
    console.log(jonas[i]);
}

// Write a program to print even numbers from arr = [13,23,12,45,22,48,66,100];

const arr = [13,23,12,45,22,48,66,100];

const even = [];

function calcEven(num){
    if (num % 2 == 0){
    even.push(num);
    }
}

for (i=0; i<arr.length;i++){
    calcEven(arr[i]);
}

console.log(even);