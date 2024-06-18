// 1.
let x = 'John Doe';
function vratiNesto(name) {
    let x = name;
    function f() {
        return x;
    }
    return f;
}
let y = vratiNesto('Jane Doe');
let z = vratiNesto()();


//1. Pratite kod u scripts.js. Koje su vrijednosti y i z varijabli na kraju programa?
// y = Jane Doe
// z = Jane Doe Jane Doe


//2. Od funkcije u prvom zadatku stvorite samopozivajuću anonimnu funkciju koja prima parametar "name". Kreirajte globanu varijablu koju ta funkcija koristi i zadajte joj vrijednost.


    (function (name) {
        var x = "Ime"; 
      })();

