var rivers = ['Mrežnica', 'Korana', 'Kupa', 'Dobra', 'Karlovačko'];
var naslov = document.createElement("h1")
naslov.innerText = "Karlovac"

// Function to change the content of the existing <h1> element
function changeH1Content() {
    // Select the existing <h1> element
    var h1 = document.querySelector('h1');

    // Check if the <h1> element exists
    if (h1) {
        // Modify the text content of the <h1> element
        h1.innerText = "New Content for the Existing H1";
    }
}

// Call the function to change the <h1> content
changeH1Content();