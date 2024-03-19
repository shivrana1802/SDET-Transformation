//Write a program for forEach loop

const fruits = ['apple', 'orange', 'mango'];

fruits.forEach(function(value){
    console.log(`${value}`);
})

fruits.forEach(function(value, index, array){
    console.log(`${index + 1}: ${value}`);
})

