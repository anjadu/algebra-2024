// ### Task 6: Find Maximum in Array

// Create a function findMax that takes an array of numbers and returns the maximum number.

// Usage:

// - console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
// - console.log(findMax([-1, -2, -3, -4, -5])); // Output: -1


function findMax(numbers) {
    // Inicijaliziramo varijablu za pohranu maksimalne vrijednosti
    var max = numbers[0];

    // Petlja prolazi kroz sve brojeve u nizu
    for (var i = 1; i < numbers.length; i++) {
        // Provjeravamo je li trenutni broj veći od trenutnog maksimuma
        if (numbers[i] > max) {
            // Ako je, postavljamo ga kao novi maksimum
            max = numbers[i];
        }
    }

    // Vraćamo maksimalni broj
    return max;


    console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
    console.log(findMax([-1, -2, -3, -4, -5])); // Output: -1