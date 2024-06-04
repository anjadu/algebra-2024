// 1. Napravite funkciju koja će konvertirati temperaturu primljenu u stupnjevima fahrenheit u stupnjeve celzijuse.
//     - Formula: 5/9 * USER INPUT - 32
//     - Obratite pažnju na decimale
//     - Primjer outputa: 130ºF equals to 54.44ºC

function convertToCelsius(fahrenheit) {

    var degrees = prompt(`Enter the temperature in Celsius: `);

    result = 5/9 * degrees - 32

    alert(`${fahrenheit}, 
    
    equals to ${result.toFixed(2)})C`;

}



// Napravite funkciju koja će zbrojiti više brojeva koji su proslijeđeni kao argumenti
//     - Primjer inputa: 1, 2, 3, 4, 5
//     - Primjer outputa: 15

function add(a, b, c, d, e) {
    // Body of the function
    return a + b + c + d + e;
}

    console.log(add(1, 2, 3, 4, 5));



// Napravite BMI kalkulator koji će korisnika pitati (korisnik mora unjeti podatke, ne developer) za njegovu visinu i težinu te na temelju danih podataka izračunati BMI
//     - Output mora biti temeljen na kalkulaciji:
//         - Underweight = <18.5 
//             - John, your BMI score is 17 which classifies you as underweight.
//         - Normal weight = 18.5–24.9
//             - John, your BMI score is 21 which classifies you as normal weight. 🎉
//         - Overweight = 25–29.9
//             - John, your BMI score is 27 which classifies you as overweight.
//         - Obesity = BMI of 30 or greater
//             - John, your BMI score is  45 which classifies you as obese. Please visit cdc.gov/obesity to learn more.

(function calculateBMI() {
    var result;
    var person = prompt(`Please enter your name: `);
    var weight = prompt(`What is your weight, ${person} ? `);
    var height = prompt(`And lastly, what is your height, ${person} ? `);

    result = weight / (height * 2);

    alert(`${person}, 
    
    your BMI score is ${result.toFixed(2)}`);
})();



// 3. Napravite funkciju koja će moći zbrajati, oduzimati, množiti i dijeliti 2 broja koja su joj proslijeđena kao argumenti.
//     - Željena matematička operacija mora biti proslijeđena kao parametar. 
//     - Primjer pozvane funkcije: calculate("*", 5, 3);

function calculate(operator, num1, num2) {
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


console.log(calculate("*", 5, 3)); 
