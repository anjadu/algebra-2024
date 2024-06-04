/* ### Task 4: Name Formatter

* Create a function formatName that takes an object representing a person with firstName and lastName properties and returns a string in the format "Last, First".

* Object:

* - var person = {firstName: "John", lastName: "Doe"};

* Usage:

* - console.log(formatName(person)); // Output: "Doe, John"
*/

var person = {
    firstName: "John",
    lastName: "Doe"
};

function formatName() {
    return (

        `${person.lastName} ${person.firstName}`
    );
}

console.log(formatName(person))
