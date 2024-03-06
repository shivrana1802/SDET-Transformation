// Looping maps

const restaurant = new Map([
    ['name','Italiano'],
    [1, 'Italy'],
    ['Categories', ['Italian', 'Chinese', 'Korean']],
    [true, 'we are open'],
]

);

console.log(restaurant);

console.log(restaurant.get('name'));
console.log(restaurant.get(1));

console.log(restaurant.has('Categories'));
restaurant.delete(1);
console.log(restaurant);
// restaurant.clear();
// console.log(restaurant);

for(const x of restaurant)
console.log(x);
