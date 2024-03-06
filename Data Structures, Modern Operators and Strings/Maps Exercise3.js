// Converting Object to map

const jonas = {
    name: 'Jonas',
    age: 30,
    year: 1995,
    calcAge: function(){
        2025 - this.year;
    },
};

console.log(jonas);

const cal = Object.entries(jonas);

const jonasMap = new Map(cal);
console.log(jonasMap);