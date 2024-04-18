// Inheritiance between classes : es6 classes

class PersonCl {
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge(){
        console.log(2030 - this.birthYear);
    }
}

class StudentCl extends PersonCl{
    constructor(firstName,birthYear,course){
        super(firstName,birthYear);
        this.course = course;
    }

    greet(){
        console.log(`hey ${this.firstName}`);
    }
}

const steve = new StudentCl('Steve', 1995, 'CS');
console.log(steve);
steve.greet();
steve.calcAge();