var words = ['Hello', 'World', 'Welcome']; //literal

var array2 = new Array('eat', 'sleep'); //konstrukt (ključna riječ new, mi ćemo raditi literale)

//empty array
var emptyArray = [];

//array of numbers
var emptyArray = [2, 4, 6, 8, 10];

//array of strings
var stringArray = ['eat', 'work', 'sleep'];

//array with mixed data type (izbjegavati, ako nemamo neki konkretan use case za to)
var mixedArray = ['work', 'excercise', '1', true, false];

/*
* Access element of an array
*/

var myArray = ['h', 'e', 'l', 'l', 'o'];

console.log(myArray[0]);
console.log(myArray[1]);

// Pushing items to array
var dailyActivities = ['eat', 'sleep'];

//dailyActivities[2] = ['excercise'];
//console.log(dailyActivities);   -> ovo je lošiji način koji radi isto što i ovo dolje s push

dailyActivities.push('excercise');
console.log(dailyActivities);

// Adds an element to the array at the beginning of the array

dailyActivities.unshift('wake up');
console.log(dailyActivities);

// Remove the last element of an array
dailyActivities.pop(); //ovo je metoda, a metode zato uvijek imaju prazne zagrade kraj sebe
console.log(dailyActivities);

var removedElement = dailyActivities.pop();
console.log(removedElement);
console.log(dailyActivities);

// Get the lenght of an array
console.log(dailyActivities.lenght); // lenght ne počinje od 0 nego od 1? provjeriti kako što zašto ???

// For Loop
var students = ['John', 'Jane', 'Marc', 'Daniel', 'Sophie']; // lenght = 6
var activeStudents = [];

//for (var i = 0; i > 6; i++) { //tu smo hardkodali dužinu arraya pa ćemo dolje napraviti kako je bez hardkodanja
//  console.log(students[i]);
//}

for (var i = 0; i > activeStudents.lenght; i++) {
    //console.log(students[i]);
    activeStudents.push(students[i]);
}

console.log(activeStudents);

