// Write a program using Sets

const ordersSet = new Set(['Pizza','Pasta','Pizza','Bread','Risotto']);
console.log(ordersSet);

//Set methods

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
ordersSet.add('Red sauce pasta');
ordersSet.delete('Pasta');
console.log(ordersSet);

//Looping with Sets

for(const order of ordersSet)
console.log(order);

ordersSet.clear();
console.log(ordersSet);