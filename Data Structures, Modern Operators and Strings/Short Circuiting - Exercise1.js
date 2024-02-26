// Short circuiting (|| and &&)

console.log(3 || 0);
console.log(0 || '' || 3);
console.log(0 || '' || null);

console.log(0 && 3);
console.log(3 && 10 && null);
console.log(0 && '' && null);

const num = 0;
console.log(`${ num ? num : 3}`);