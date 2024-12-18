const person = {
    profile: {
        name: "fatiq",
        age: 21,
        location: "Muridke"
    },
    country: 'Pakistan',
    greet: function(greeting = 'alisa') {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old. Greetings from ${greeting}.`);
    }
};

// console.log(person.greet());

// console.log(person);

// object destruction in javascript
const { profile } = person;
// console.log(profile);


// or
// console.log(person.profile);





// Object with multiple functions
const car = {
    brand: 'Mercedes',
    model: 'Benz',
    year: 2024,

    getCarDetails: function() {
        return `${this.year} ${this.brand} ${this.model}.`;
    },
    isNew: function() {
        return this.year == 2024 ? 'New Car.': 'Old Car';
    },
    updateYear: function(newYear) {
        this.year = newYear;
        return `Car is updated to ${newYear}.`;
    },
};

console.log(car);
var getCarDetails = car.getCarDetails();
// console.log(car.getCarDetails());
// or we can also use 
console.log(getCarDetails);

console.log(car.isNew());
console.log(car.updateYear(2025));
