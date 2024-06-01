/* 1. Napišite JavaScript funkciju za prikaz statusa čitanja knjiga iz danog objekta (tj. prikaz naziva *knjige, imena autora i statusa čitanja).
    *- Ako je knjiga pročitana (readingStatus: true) ispišite u konzolu 'Already read 'XXX' by XXX.'
    *- Ako knjiga nije pročitana (readingStatus: false) ispišite u konzolu 'You still need to read 'XXX' *by XXX.'

* XXX predstavlja naziv knjige i autora, a za iteraciju kroz niz objekta koristite for petlju.
*/


// Naš popis knjiga
var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true,
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true,
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false,
    },
];


// Kod

// Funkcija za prikaz statusa čitanja knjiga

function prikaziStatusCitacnja(knjiznica) {

    // Petlja koja prolazi kroz svaki element popisa knjiga
    for (var i = 0; i < knjiznica.length; i++) {
        var knjiga = knjiznica[i]; // Uzima trenutnu knjigu iz popisa
        var poruka = ""; // Inicijalizira praznu poruku

        if (knjiga.readingStatus) {
            poruka = `Already read '${knjiga.title}' by ${knjiga.author}.`;
        } else {
            poruka = `You still need to read '${knjiga.title}' by ${knjiga.author}.`;
        }

        console.log(poruka); // Ispisuje poruku u konzolu
    }
}

// Pozivanje funkcije s popisom knjiga `library`
prikaziStatusCitacnja(library);



