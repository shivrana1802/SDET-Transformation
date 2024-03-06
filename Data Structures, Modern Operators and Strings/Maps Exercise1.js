// Write a program using maps

const restaurant = new Map();
console.log(restaurant);

restaurant.set('name','Italiano');
restaurant.set(1, 'Italy');
restaurant.set(2, 'portugal');
restaurant.set('Categories', ['Italian', 'Chinese', 'Korean']).set(true, 'we are open');

console.log(restaurant);

console.log(restaurant.get('name'));
console.log(restaurant.get(1));

console.log(restaurant.has('Categories'));
restaurant.delete(2);
console.log(restaurant);
restaurant.clear();
console.log(restaurant);