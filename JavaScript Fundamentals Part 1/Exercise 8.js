// Boolean Logic, Logical Operators (And = && , OR = ||, NOT = !)

// Problem - Write a program based on boolean logic 

const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = false;

if(hasDriverLicense){
    console.log('Person can drive');
}
else{
    console.log('Person cannot drive');
}

// Logical Operators

if(hasDriverLicense && hasGoodVision && !isTired){
    console.log('Person can drive');
}
else{
    console.log('Person cannot drive');
}

if(hasDriverLicense || hasGoodVision || isTired){
    console.log('Person can drive');
}
else{
    console.log('Person cannot drive');
}