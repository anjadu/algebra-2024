// Kopiranje niza 
const originalniNiz = [1, 2, 3];
const kopiraniiNiz = [...originalniNiz];

console.log(kopiraniNiz);

// Spajanje niza
const niz1 = [1, 2, 3];
const niz2 = [4, 5, 6];
const spojeniNiz = [...niz1, ...niz2];

console.log(spojeniNiz);

// Kopiranje objekta
const originalniObjekt = { ime: 'John', prezime: 'Doe'};
const kopiraniObjekt = { ...originalniObjekt};

console.log(kopiraniobjekt);

// Spajanje objekta
const objekt1 = { a: 1, b:2 };
const objekt2 = { b: 3, c:4 };
const spojeniObjekt = { ...objekt1,...objekt2 };

console.log(spojeniObjekt);

// Slanje argumenata funkcijama
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);
console.log(result); // Output: 6