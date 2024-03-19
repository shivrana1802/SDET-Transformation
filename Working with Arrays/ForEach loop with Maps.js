//Write a program for forEach loop with maps

const jonas = new Map([
    ['name' , 'Jonas'],
    ['age', 30],
    ['nationality', 'US'],
    [1 , 'NY'],
]);

console.log(jonas);

jonas.forEach(function(value, key, maps){
    console.log(`${key} : ${value}`);
})

// using for of loop

for(const [key,value] of jonas.entries())
console.log(`${key} : ${value}`);