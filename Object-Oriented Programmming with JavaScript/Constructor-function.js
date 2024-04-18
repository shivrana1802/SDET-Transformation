// Constructor function with new operator

const Person = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.calcAge = function(){
    console.log(2030 - 1995);
}

const steve = new Person('Steve', 'Marsh');
console.log(steve);
steve.calcAge();
console.log(steve instanceof Person);