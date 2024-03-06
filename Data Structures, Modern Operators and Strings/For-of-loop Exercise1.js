// Write a program for for-of-loop

const num = [5,10,15,20,25];
for(const n of num) 
console.log(n);

// Using entries method

for(const n of num.entries())
console.log(n);

for(const [i,el] of num.entries())
console.log(`${i} : ${el}`);