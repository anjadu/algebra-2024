window.onload = function () {
    console.log('Page fully loaded')
};

var main = document.getElementById('main');
console.log(main);

var newDiv = document.createElement('div');
console.log(newDiv);

main.appendChild(newDiv);

// Parent node is BODY

// main.parentNode.removeChild(main)

// ovo je dolje produžen zapis koji radi isto što i RemoveChild ovdje:
// var parent = main.parentNode; // body
// parent.removeChild(main); Remving #main from <body>



