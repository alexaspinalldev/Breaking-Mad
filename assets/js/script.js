// On page load run function
document.addEventListener("DOMContentLoaded", () => newQuote())

/// Global variables
const imageBox = document.getElementById("imageBox");
const quoteBox = document.getElementById("quoteBox");
const authorBox = document.getElementById("authorBox");

/// ------- Functions ------- ///
// Generate new quote and background

async function newQuote() {
    try {
        const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
        const data = await response.json(); // Convert to JSON array
        quote = data[0].quote;
        author = data[0].author;
    } catch (error) {
        console.log("Error:", error); // Handle errors
    }
    quoteBox.innerText = quote;
    authorBox.innerText = ` - ${author}`;
    newBg()
}



// my array of images
const images = [
    'assets/images/bg images/Forest.webp',
    'assets/images/bg images/Landscape Sunset.webp',
    'assets/images/bg images/Swingset landscape.jpg',
    'assets/images/bg images/Underwater Scene.webp',
    'assets/images/bg images/Waterfall.webp',
    'assets/images/bg images/Mountain Range.jpg'

];

let currentIndex = 0; // makes the index start with the first image in the array (on line 0)
const newBgBtn = document.getElementById('newBgBtn'); // This gets the button

// Function to update the background image
function newBg() {
function newBg() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to 0 after the last image so that we cycle through all images
    imageBox.style.backgroundImage = `url('${images[currentIndex]}')`; // Updates the image
    console.log(`Background changed to: ${images[currentIndex]} (Index: ${currentIndex})`); // Logs the change on the console so I can see what I'm doing
    randomPosish() // Randomises the postion of the quote
}
// newBgBtn.addEventListener('click', changeBackground); // No need for this as were using onclick - Alex



/// Randomised layout of the quote
var removePosition = [];

function randomPosish() {
    let random3 = () => Math.floor(Math.random() * 3); // Get a random number 0-2

    let positionList = [];

    if (removePosition.length > 0) { // If there are positioning classes to remove
        for (let position of removePosition) { // loop through the array
        imageBox.classList.remove(position); // and remove each class
        console.log("Removed class:", position);}
    } else {console.log("false")}
    console.log("Removed array:", removePosition);


    // Randomly assign a new alignment class
    switch (random3()) {
        case 0:
            align = "align-items-start";
            break;
        case 1:
            align = "align-items-center";
            break;
        case 2:
            align = "align-items-end";
            break;
    }

    // Randomly assign a new justification class
    switch (random3()) {
        case 0:
            justify = ["justify-content-start", "text-start"];
            break;
        case 1:
            justify = ["justify-content-center", "text-center"];
            break;
        case 2:
            justify = ["justify-content-end", "text-end"];
            break;
    }

    //Assemble the positionList array here
    positionList.push(align, ...justify)

    removePosition = positionList; // Update the array to remove when the function re-runs

    // Add the new classes to imageBox
    for (let position of positionList) { // Loop through the array
        imageBox.classList.add(position); // and add each class
        console.log("Added class:", position);}
    console.log("Added array:", positionList);
}


