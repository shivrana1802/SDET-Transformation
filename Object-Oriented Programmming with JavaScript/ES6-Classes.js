//ES6 classes

class PersonCl {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    calcAge(){
        console.log(2030-1995);
    }
}

const steve = new PersonCl('Steve', 'Marsh');
console.log(steve);
console.log(steve instanceof Object);

steve.calcAge();