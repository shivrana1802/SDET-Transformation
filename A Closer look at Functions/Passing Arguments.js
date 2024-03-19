// Passing arguments , Value vs reference

const flight = 'LH234';
const jonas = {
    name : 'Jonas',
    passport : 123456789,
};

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    console.log(flightNum);
    passenger.name = 'Mr.' + passenger.name;
    if(passenger.passport === 123456789){
        console.log('checkedin ');
    }
        else{
            console.log('wrong passport');
        }
    }


checkIn(flight,jonas);
console.log(flight, jonas);

const newPassport = function(person){
    person.passport = '12345678';
}

newPassport(jonas);

console.log(jonas);







