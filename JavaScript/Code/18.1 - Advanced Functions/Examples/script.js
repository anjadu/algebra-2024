// Default binding
// window.name = 'John';
function greet() {
    console.log(`Hello, ${this.name}`);
}

greet();

// ************************************************************************
// *********************************** BIND*********************************

function multiply(x, y) {
    console.log({ x, y });
    return `${this.name} has ${(x * y)} points`;
}

var person2 = {
    name: `Harry`,
};

var person3 = {
    name: `Ron`,
};

var f1 = multiply.bind(person2);
console.log(f1(3, 5));

var f2 = multiply.bind(person 3);
console.log(f2(10, 6));

// **************************************************************************
// *********************************** CALL *********************************

var person4 = {
    name: 'Harry',
};

var person5 = {
    name: 'Ron',
};

function greet(greeting, other){
    console.log(`${greeting}, ${this.name}`);
    console.log(`${other}, ${this.name}`);
}

greet.call(person4, 'Hello', 'Hi'); //takva je sintaksa da prvo ide vrijednost na koju se this odnosi (person4), a nakon toga ostalo

// **************************************************************************
// *********************************** APPLY ********************************

greet.apply(person4, ['Hello', 'Hi']); // apply prima argumente u obliku arraya

// **************************************************************************
// ***********************************EXAMPLE ********************************

function pozdravi(ime) {
    console.log(`Pozdrav, ${ime}! Moje ime je ${this.ime}`);
}

var osoba = {
    ime: 'John',
};

pozdravi.apply(osoba, ['Alice']);
