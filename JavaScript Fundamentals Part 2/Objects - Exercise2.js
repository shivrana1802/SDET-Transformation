// Write a program to create an Object 'Car' having a method 'getCarDetails'

const car = {
    brand : "KIA",
    model : 2024,
    topSpeed : 200,
    getCarDetails : function(){
        return `I have a ${this.brand} car with ${this.model} model which is having a topspeed of ${this.topSpeed} km/h`;
    },
}

console.log(car.getCarDetails());