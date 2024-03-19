// Write a program using default parameters

const bookings = [];

const createBooking = function(flightNum = 'LTY', numPassengers = 2 , price = 199 * numPassengers){

    const booking = {
        flightNum,
        numPassengers,
        price,
    };

    console.log(booking);
    bookings.push(booking);
}

createBooking();

console.log(bookings);