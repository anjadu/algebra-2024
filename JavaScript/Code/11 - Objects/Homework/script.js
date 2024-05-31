/* 1. Napišite JavaScript funkciju za prikaz statusa čitanja knjiga iz danog objekta (tj. prikaz naziva *knjige, imena autora i statusa čitanja).
    *- Ako je knjiga pročitana (readingStatus: true) ispišite u konzolu 'Already read 'XXX' by XXX.'
    *- Ako knjiga nije pročitana (readingStatus: false) ispišite u konzolu 'You still need to read 'XXX' *by XXX.'

* XXX predstavlja naziv knjige i autora, a za iteraciju kroz niz objekta koristite for petlju.
*/

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


function prikaziStatusCitacnja(knjiznica) {
    for (var i = 0; i < knjiznica.length; i++) {
        var knjiga = knjiznica[i];
        var poruka = "";

        if (knjiga.readingStatus) {
            poruka = "Already read '" + knjiga.title + "' by " + knjiga.author + ".";
        } else {
            poruka = "You still need to read '" + knjiga.title + "' by " + knjiga.author + ".";
        }

        console.log(poruka);
    }
}

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

prikaziStatusCitacnja(library);



