// ### Task 3: Array Filter

//Create a function filterArray that takes an array of numbers and returns a new array containing only the even numbers.
//Usage:

//console.log(filterArray([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]

function filterArray(numbers) {
    // Inicijaliziramo prazan niz za spremanje parnih brojeva
    var evenNumbers = [];

    // Petlja prolazi kroz svaki broj u nizu
    for (var i = 0; i < numbers.length; i++) {
        // Provjeravamo je li trenutni broj paran
        if (numbers[i] % 2 === 0) {
            // Ako je paran, dodajemo ga u niz parnih brojeva
            evenNumbers.push(numbers[i]);
        }
    }

    // Vraćamo niz parnih brojeva
    return evenNumbers;
}

// Primjer korištenja funkcije s nizom brojeva
console.log(filterArray([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
