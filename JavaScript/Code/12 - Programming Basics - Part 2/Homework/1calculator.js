/* Create a function "calculate" that takes two numbers and a string representing an operator 
*  ("+", "-", "\*" or "/"), and returns the result of the operation.

* Usage:
* console.log(calculate(5, 3, '+')); // Output: 8
* console.log(calculate(5, 3, '\*')); // Output: 15
*/


function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            // Provjera dijeljenja s nulom
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

console.log(calculate(5, 3, '+')); // Output: 8
console.log(calculate(5, 3, '*')); // Output: 15
console.log(calculate(10, 2, '/')); // Output: 5
console.log(calculate(8, 0, '/')); // Output: "Cannot divide by zero"
console.log(calculate(5, 3, '-')); // Output: 2
console.log(calculate(5, 3, '&')); // Output: "Invalid operator"




