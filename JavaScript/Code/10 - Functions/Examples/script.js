function hello() {
    console.log('Hello there');
}


// Function without return
function greet(name) {
    console.log('Hello ' + name);
}

greet('Alice');

function add(a, b) {
    // Body of the function
    return a + b;
}

// Invoking the function
console.log(add(3, 4));
console.log(add(5, 36));

function dynamicGreet(name) {
    console.log(`Hello, ${name}. How are you today?`); // backtickovi za interpolaciju stringa, varijablu ubacujemo gdje hoćemo s ${}
}

// var student = prompt('Enter a name: ');

// dynamicGreet(student);


// Self-invoking function

(function greet() {
    console.log("Hello, i have invoked myself!")

})();

//BMI kalkulator

(function calculateBMI() {
    var result;
    var person = prompt(`Please enter your name: `);
    var weight = prompt(`What is your weight, ${person} ? `);
    var height = prompt(`And lastly, what is your height, ${person} ? `);

    result = weight / (height * 2);

    alert(`${person}, your BMI score is ${result.toFixed(2)}`);
})();

