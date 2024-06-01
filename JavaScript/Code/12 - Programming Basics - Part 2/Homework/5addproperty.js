// ### Task 5: Add Property

//Create a function addObjectProperty that takes an object, a key, and a value, and adds the key-value pair to the object.

//Object:

//- const obj = {a: 1, b: 2};

//Usage:

//- console.log(addObjectProperty(obj, 'c', 3)); // Output: {a: 1, b: 2, c: 3}


const obj = { a: 1, b: 2 };

function addObjectProperty(obj, key, value) {
    // Dodajemo ključ-vrijednost par u originalni objekt
    obj[key] = value;
    // Vraćamo izmijenjeni objekt
    return obj;
}


// Poziv funkcije i ispis rezultata
console.log(addObjectProperty(obj, 'c', 3)); // Output: {a: 1, b: 2, c: 3}