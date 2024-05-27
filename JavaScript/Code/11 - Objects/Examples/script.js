// Object literal

var person = {
    firstName: 'Nino',
    lastName: 'Škuflić',
    id: 12345,
    fullName: function () {
        return this.firstName + ' ' + this.lastName; // JS ne zna da se ove varijable odnose na ova gore svojstva pa moramo koristiti this
    },
};

// svojstvima možemo pristupiti pomoći dot notacije

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName())


// Creating an object by using the new keyword (nev Object method)
var myCar = new Object ();
console.log(myCar); // {}

myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar);

// Another object

var phone = {
    brand: {
        manufacturer: 'Apple',
        model: 'iPhone 13 Pro',
    },

    color: ['SIerra Blue', 'Silver', 'Gold', 'White'],
    price: 999,
    display:'6.1 inch display',
    qty: 184,
    checkStock: function (){
        if (this.qty > 0) {
            return 'in stock';
        } else {
            return 'out of stock';
        }
    },
};

console.log(phone.brand.model);
console.log(phone.checkStock());
console.log(
    `The phone you have selected ${phone.brand.model} is ${  //ternarna operacija koja zamjenjuje if else + interpolacija
        phone.checkStock () == `in stock`
            ? `available for purchase`
            : `not available for purchase. Sorry.`
}`
);

// Converting an object into JSON
var myPhoneJSON = JSON.stringify(phone);
console.log(myPhoneJSON);

// Converting JSON into object

var myJSON=  `{"brand":{"manufacturer":"Apple","model":"iPhone 14 Pro"},"color":["SIerra Blue","Silver","Gold","White"],"price":1099,"display":"6.1 inch display","qty":100}`

var myObject = JSON.parse(myJSON);
console.log(myObject);