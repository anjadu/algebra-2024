// ### Task 9: Remove Duplicates from Array

// Create a function removeDuplicates that takes an array and returns a new array with duplicate elements removed.

// Usage:

// - console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
// - console.log(removeDuplicates(["a", "b", "a", "c", "b"])); // Output: ["a", "b", "c"]

function removeDuplicates(arr) {
    // Stvaramo novi niz koji će sadržavati samo jedinstvene elemente
    var uniqueArray = [];

    // Petlja prolazi kroz svaki element originalnog niza
    for (var i = 0; i < arr.length; i++) {
        // Provjeravamo je li trenutni element već prisutan u novom nizu - metoda indexOff koja se koristi za pronalaženje indeksa prvog pojavljivanja određenog elementa u nizu
        if (uniqueArray.indexOf(arr[i]) === -1) {
            // Ako nije, dodajemo ga u novi niz
            uniqueArray.push(arr[i]);
        }
    }

    // Vraćamo novi niz koji sadrži samo jedinstvene elemente
    return uniqueArray;
}

// Primjeri korištenja funkcije s različitim nizovima
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates(["a", "b", "a", "c", "b"])); // Output: ["a", "b", "c"]