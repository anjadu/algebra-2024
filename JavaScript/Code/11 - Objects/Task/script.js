let car = {
    manufacturer: "Chevrolet",
    model: "Cruze",
    year: 2010,
    color: "white",
    condition: "used",
    seats: 5,
    quantity: 1,

    checkIfSold: function () {
        if (this.quantity > 0) {
            return 'Great, this car is still available!';
        } else {
            return 'Sorry, this car is sold.';
        }
    },

    checkIfSuitableForFamily: function () {
        if (this.seats > 2) {
            return 'This car is suitable for family';
        } else {
            return 'This car is not suitable for family';
        }
    },

    age: function () {
        return `This car is ${new Date().getFullYear() - this.year} years old`;
    },
};

console.log(car.checkIfSold());
console.log(car.checkIfSuitableForFamily());
console.log(car.age());

