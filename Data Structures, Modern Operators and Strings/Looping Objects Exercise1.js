// Looping Objects : keys , values and entries

const jonas = {
     name: 'Jonas',
     age: 30,
     job: 'teacher',
     calcAge: function(){
        return 2025 - 1995;
     }
}

console.log(jonas);

const keys = Object.keys(jonas);
console.log(keys);

for(const n of keys) console.log(n);

const values = Object.values(jonas);
console.log(values);

const entries = Object.entries(jonas);
console.log(entries);