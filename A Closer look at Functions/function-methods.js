// Call, Apply and Bind method

const airIndia = {
    airline: 'AIR INDIA',
    code: 'AI',
    book: function(flightNum, Passenger){
        console.log(`${Passenger} is booking a flight ${this.code} ${flightNum}`);
    },
};

const airAsia = {
    airline: 'AIR ASIA',
    code: 'AA',
};

const booking = airIndia.book;

//call method
booking.call(airAsia, 5800, 'Jonas');
booking.call(airIndia, 2545, 'Tim');

//apply method
const flightData = [4501, 'Matilda'];
booking.apply(airAsia, flightData);

//Bind method

const bookAA = booking.bind(airAsia);
bookAA(9999, 'Andrew');

