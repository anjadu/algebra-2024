'use strict';

// 1.
var a = 78;
var b = 34;
var myObject = {
    property1: 1,
    property2: 2,
    property3: 1,
};

// 2.
var users = [
    { name: 'Fabio', surname: 'Biondi' },
    { name: 'Mario', surname: 'Rossi' },
];

var user = { name: 'Lorenzo', surname: 'Verdi' };
var allUsers = [...users, user];

console.log(allUsers);

// 3.
for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log('The number is ' + i);
    }, 1000);

    console.log(i);
}
