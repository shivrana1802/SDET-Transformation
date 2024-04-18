// Inheritiance between classes : construction functions

const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function(){
    console.log(2030 - this.birthYear);
}

const Student = function(firstName, birthYear, course){
    Person.call(this, firstName, birthYear);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.greet = function(){
    console.log(`hey ${this.firstName}`);
}

const steve = new Student('Steve', 1995, 'CS');
console.log(steve);
steve.greet();
steve.calcAge();