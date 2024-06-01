// ## Task 8: Create User Object

// Create a function createUser that takes a first name, last name, and age, and returns an object representing a user.

// Usage:

// - console.log(createUser("John", "Doe", 25)); // Output: {firstName: "John", lastName: "Doe", age: 25}
// - console.log(createUser("Jane", "Smith", 30)); // Output: {firstName: "Jane", lastName: "Smith", age: 30}



function createUser(firstName, lastName, age) {
    // Stvaramo novi objekt s zadanim svojstvima
    var user = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    };

    // Vraćamo novostvoreni objekt
    return user;
}

// Primjeri korištenja funkcije s različitim argumentima
console.log(createUser("John", "Doe", 25)); // Output: {firstName: "John", lastName: "Doe", age: 25}
console.log(createUser("Jane", "Smith", 30)); // Output: {firstName: "Jane", lastName: "Smith", age: 30}
