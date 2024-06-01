// ### Task 2: String Reverser
// Create a function reverseString that takes a string and returns the reversed version of the string.

function reverseString(str) {
    // Razdvajamo string na pojedinačne znakove, okrećemo ih i ponovo spajamo
    return str.split('').reverse().join('');
}

// Primjer korištenja funkcije
console.log(reverseString("Hello")); // Output: "olleH"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"