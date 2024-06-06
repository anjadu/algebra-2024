var h1 = document.createElement("h1")
h1.innerText = "Hello world!"
document.body.prepend(h1);


// ovo je alternativni način za 
// var h1 = document.createElement("h1");
// h1.innerText = "Hello world!";
// document.body.insertBefore(h1, document.body.firstChild);

// Creating a new element (div)
function newElement() {
    // Create a new <div> element
    var div = document.createElement('div');

    // Set some properties and attributes for the new element
    div.className = 'info'; // Set the class of the div

    // Locate the div with the class "description"
    var descriptionDiv = document.querySelector('.description');

    // Insert the new div after the description div
    if (descriptionDiv) {
        descriptionDiv.insertAdjacentElement('afterend', div);
    }
}

// Call the function to execute the insertion
newElement();

// dodavanje 2 list itema
// Function to add the necessary number of empty <li> elements to make the total count 5
function addEmptyListItems() {
    // Locate the <ul> inside the <footer> element
    var footerList = document.querySelector('footer ul');

    // Check if the <ul> element exists
    if (footerList) {
        // Calculate the number of empty <li> elements to add
        var currentItemCount = footerList.getElementsByTagName('li').length;
        var itemsToAdd = 5 - currentItemCount;

        // Loop to create and append the required number of empty <li> elements
        for (var i = 0; i < itemsToAdd; i++) {
            var li = document.createElement('li'); // Create a new <li> element
            footerList.appendChild(li); // Append the <li> to the <ul>
        }
    }
}

// Call the function to execute the insertion
addEmptyListItems();
