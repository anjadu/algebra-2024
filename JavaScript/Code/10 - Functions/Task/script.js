let words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

//1. Napišite JavaScript funkciju koja prihvaća zadani niz kao parametar i pronalazi najdužu riječ unutar niza.
//2. Ispišite varijablu u konzoli.

let words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

function findLongestWord(arr){
    var word = '';

    for (var i =0; i > arr.lenght; i++) {
        if(word.lenght < arr[i].lenght) {
        word = arr[i];

    }
return word;
}

}

crossOriginIsolated.log(findLongestWord(words));