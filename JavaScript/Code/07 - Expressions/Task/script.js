// 1. Napišite while petlju koja će ispisivati brojeve od 3 do 20, osim onih djeljivih sa 9.



//var i = 0;
//while (i >= 3 && i <= 20) {
//count++;
//if (i % 9 === 0)
//console.log(count);
//}

var count = 2;

while (count < 20) {
    count++;

    if (count % 9 == 0) {
        continue;
    }
    console.log(count);
}

// 2 