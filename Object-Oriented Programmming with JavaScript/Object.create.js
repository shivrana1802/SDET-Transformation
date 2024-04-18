// Object.create method

const personObj = {
    calcAge(){
        console.log(2030-1995);
    },
    init(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    },
}

const steve = Object.create(personObj);
console.log(steve);
steve.init('Steve', 'Marsh');
console.log(steve);
steve.calcAge();
console.log(steve instanceof Object.create(personObj));
