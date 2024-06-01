// ### Task 7: Count Vowels

// Create a function countVowels that takes a string and returns the number of vowels (a, e, i, o, u) in the string.

// Usage:

// - console.log(countVowels("hello world")); // Output: 3
// - console.log(countVowels("javascript is fun")); // Output: 5



function countVowels(str) {
    // Inicijaliziramo brojač za brojanje samoglasnika
    var count = 0;

    // Pretvaramo ulazni string u mala slova radi lakše provjere
    var lowerStr = str.toLowerCase();

    // Petlja prolazi kroz svaki znak u stringu
    for (var i = 0; i < lowerStr.length; i++) {
        // Provjeravamo je li trenutni znak samoglasnik
        if (lowerStr[i] === 'a' || lowerStr[i] === 'e' || lowerStr[i] === 'i' || lowerStr[i] === 'o' || lowerStr[i] === 'u') {
            // Ako je, povećavamo brojač
            count++;
        }
    }

    // Vraćamo broj samoglasnika
    return count;
}

// Primjeri korištenja funkcije s različitim stringovima
console.log(countVowels("hello world")); // Output: 3
console.log(countVowels("javascript is fun")); // Output: 5