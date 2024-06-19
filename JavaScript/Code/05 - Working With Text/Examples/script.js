var greet = "Hello, my name is ";
var firstName = "Nino";

var user = greet + firstName;
console.log(user);

console.log("I have 27 " + "years");
console.log("I have" + " " + "'3' dogs");

console.log("I live in Zagreb, the capital of \nRepublic of Croatia."); // nova linija

// Length
var str = "Life, the universe and everything.";
console.log(str.length); // lenght je atribut/propety (brojanje znakova u stringu kreće od 1), ne od 0! (34)

// CharAT - counting starts from 0, spaces are not ignored, METODA
var sentence = "The quick brown fox jumps over the lazy dog."
console.log(sentence.charAt(6));

// Trim 
var greeting = "                  Hello, World!        ";
console.log(greeting.trim());


// IndexOf
var paragraph =
    "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

var searchTerm = "dog";
var indexOfFirst = paragraph.indexOf(searchTerm); // 40
console.log("Search term is found at " + indexOfFirst);

var secondTerm = paragraph.indexOf(searchTerm, indexOfFirst + 1);
console.log("2nd search term is found at " + secondTerm); //52 - where the second dog is found

// toUpperCase & toLowerCase;
var sentence2 = "The quick brown FOX jumps over the lazy DOG";
console.log(sentence2.toUpperCase());
console.log(sentence2.toLowerCase());



