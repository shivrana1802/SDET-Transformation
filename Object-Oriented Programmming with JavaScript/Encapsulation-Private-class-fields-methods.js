//Encapsulation: Private class fields and methods

class PersonCl {
    //Public field
    nationality = 'US';

    //Private field
    #birthYear;

    constructor(firstName,lastName,birthYear){
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.#birthYear = birthYear;
    }

        //Private method
    #calcAge(){
        console.log(2030 - this.#birthYear);
    }
        //Public methods
    age(){
        return this.#calcAge();
    }
    greet(){
        console.log(`hey ${this.firstName}`);
    }
    
}

const steve = new PersonCl('Steve','Marsh',1995);
console.log(steve);
steve.age();
console.log(steve.firstName);
// console.log(steve.#birthYear); //Private field
// console.log(steve.#calcAge()); // Private method
console.log(steve.nationality);