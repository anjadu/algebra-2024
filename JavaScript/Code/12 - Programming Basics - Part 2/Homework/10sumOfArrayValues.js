// ### Task 10: Sum of Array Values

// Create a function sumArrayValues that takes an array of numbers and returns the sum of all the values.

// Usage:

// - console.log(sumArrayValues([1, 2, 3, 4, 5])); // Output: 15
// - console.log(sumArrayValues([10, 20, 30])); // Output: 60

function sumArrayValues(arr) {
    // Inicijaliziramo varijablu za pohranu sume
    var sum = 0;

    // Petlja prolazi kroz svaki element niza
    for (var i = 0; i < arr.length; i++) {
        // Dodajemo trenutni element na sumu
        sum += arr[i];
    }

    // Vraćamo sumu svih elemenata niza
    return sum;
}

// Primjeri korištenja funkcije s različitim nizovima
console.log(sumArrayValues([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArrayValues([10, 20, 30])); // Output: 60