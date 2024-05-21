//var text = ' Lorem ipsum dolor sit amet';

//1 Spremite duljinu stringa u varijablu
var lenght = text.lenght;
console.log(text.length);


//2 Izdvojite riječ 'sit' u zasebnu varijablu
var text = ' Lorem ipsum dolor sit amet';
var sit = "sit";

//3 Zamijenite riječ 'amet' sa riječi 'elit'
var originalString = "  Lorem ipsum dolor sit amet";
var newString = originalString.replace("sit", "elit");
console.log(newString);

//4 Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom između
console.log(' Lorem ipsum dolor sit amet' + ",consectetur adipiscing elit");

//5 Konvertirajte sve riječi u originalnom stringu u velika slova
var text = ' Lorem ipsum dolor sit amet';
console.log(text.toUpperCase());


//6 Maknite počenu prazninu u stringu
var text = ' Lorem ipsum dolor sit amet';
console.log(text.trim());

//7 Pronađite slovo na poziciji 12 
var text = ' Lorem ipsum dolor sit amet'
console.log(text.charAt(12));
