var a = 6;
var b = '5';

console.log(typeof a); //number

//ARITHMETIC
console.log(a + b); // 65
console.log(a + +b); // 11
console.log(a - b); // 1
console.log(a * b); // 30
console.log(a * 7.4); // puno decimala dobijemo
console.log((a * 7.4).toFixed(2)); // ovdje smo zaokružili na 2 decimale pomoću toFixed
console.log(a / b); // 1.2
console.log(a / 0); // infinity - u JS postoji vrijednost infinity koja je typeof number!
console.log(a / Infinity); //0
console.log(a % 6); //0 (nema ostatka)

//COMPARISON

console.log(a == b); // Equal operator
console.log(a === b); // Strict equal
console.log('' === 0); // falsy values

//LOGICAL
console.log(5 < 6 && 6 == 6); // true
console.log(5 < 6 || 6 == 6); // true
console.log(!(5 < 6)); // false, zato što smo negirali vrijednost

// CONDITIONAL (TERNARY)
console.log(1 == 1 ? 'This is equal' : 'This is not equal');
console.log(1 === '1' ? 'This is equal' : 'This is not equal');


