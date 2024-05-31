/* Napišite JavaScript funkciju koja vraća riječ koja ima slova posložena prema abecednom redu.
* - Na primjer, ako ste proslijedili riječ 'Developer', JavaScript funckija treba ispisati u konzolu *riječ 'Deeeloprv' (slova su posložena po abecednom redu).
*/

var sortString = (string) => {
    return string.split("").sort().join("");
};

console.log("Sorted String: ");
console.log(sortString("developer"));
