var age = 25;

if (age > 18) {
    console.log('User is of legal drinking age');
} else {
    console.log('User is NOT of legal drinking age. DO NOT SERVE HIM!');
}

// If, Else if, Else
var gender = 'Male';
if (gender == 'Male') {
    console.log('User is a male');
} else if (gender == 'Female') {
    console.log('User is a female.');
} else {
    console.log('User gender unknown');
}

// If, Else with a range
var customerAge = 17;
if (customerAge >= 18 && customerAge <= Infinity) {
    console.log('User is of legal drinking age');
} else {
    console.log('WARNING: This user is NOT of legal drinking age. DO NOT SERVE HIM!');
}

var customerAge = 100;
if (customerAge >= 4 && customerAge <= 99) {
    console.log('User can play with legos');
} else {
    console.log('WARNING: This user is NOT of legal age to play with legos. DO NOT SELL TO HIM!');
}


// Switch
var fruit = 'Mangoes';

switch (fruit) {
    case 'Oranges':
        console.log('User has bought oranges');
        break;

    case 'Mangoes':
        console.log('User has bought mangoes');
        break;

    case 'Papayas':
        console.log('User has bought papayas');
        break;

    default:
        console.log('I have no idea what the user has bought');
        break; // ovo služi ako hendlamo neki exception, ako ni jedan uvjet nije zadovolje, ili ako doslovno želimo nešto zadano
}


// Starting value is 0 which represents in our (switch) case - Sunday
console.log(new Date().getDay()); // getDay je standardna JS metoda koje možemo pozvati nad raznim standardnim objektima

var date = new Date().getDay();

switch (date) {
    case 0:
        console.log('Today is Sunday');
        break;

    case 1:
        console.log('Today is Monday. Ugh.');
        break;

    case 2:
        console.log('Today is Tuesday.');
        break;

    case 3:
        console.log('Today is Wednesday.');
        break;

    case 4:
        console.log('Today is Thursday.');
        break;

    case 5:
        console.log('Today is Friday. Yay!');
        break;

    case 6:
        console.log('Today is Saturday.');
        break;

}