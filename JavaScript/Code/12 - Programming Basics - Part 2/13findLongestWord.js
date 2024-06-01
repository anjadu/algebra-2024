// ### Task 11: Find Longest Word

// Create a function findLongestWord that takes a string and returns the longest word in the string.

// Usage:

// - console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
// - console.log(findLongestWord("JavaScript is awesome")); // Output: "JavaScript"

function findLongestWord(str) {
    // Razbijamo ulazni string na riječi koristeći razmak kao separator
    var words = str.split(" ");

    // Inicijaliziramo varijablu za pohranu najdulje riječi
    var longestWord = "";

    // Petlja prolazi kroz svaku riječ u nizu
    for (var i = 0; i < words.length; i++) {
        // Provjeravamo duljinu trenutne riječi s duljinom najdulje riječi
        if (words[i].length > longestWord.length) {
            // Ako je trenutna riječ dulja, postavljamo je kao najdulju riječ
            longestWord = words[i];
        }
    }

    // Vraćamo najdulju riječ
    return longestWord;
}

// Primjeri korištenja funkcije s različitim stringovima
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
console.log(findLongestWord("JavaScript is awesome")); // Output: "JavaScript"