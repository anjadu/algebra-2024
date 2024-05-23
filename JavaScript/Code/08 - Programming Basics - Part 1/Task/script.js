// 1. Kreirajte varijable firstName i lastName i spojite ih u varijablu fullName, ali s razmakom ("") između imena i prezimena.

var firstName = "Ime";
var lastName = " Prezime";

var imePrezime = firstName + '' + lastName;
console.log(imePrezime);




//3  Napišite petlju koja će prolaziti kroz brojeve od 1 do 20. 
//  - Za svaku će iteraciju provjeriti je li trenutni broj paran ili neparan te u konzli kao rezultat prikazati npr. "Broj 2 je paran".

var count = 1;

while (count < 20) {
    count++;

    if (count % 2 == 0) {
        continue;
    }
    console.log("Ovaj broj je paran");
}
