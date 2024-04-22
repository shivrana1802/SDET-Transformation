//Encapsulation : Protected properties and methods

class PersonCl {
    constructor(firstName,lastName,birthYear){
        //Public properties
        this.firstName = firstName;
        this.lastName = lastName;

        //Protected property
        this._birthYear = birthYear;
    }

        //Protected method
    _calcAge(){
        console.log(2030 - this._birthYear);
    }
        //Public method
    age(){
        return this._calcAge();
    }
}

const steve = new PersonCl('Steve','Marsh',1995);
console.log(steve);
console.log(steve._birthYear);
steve.age();

