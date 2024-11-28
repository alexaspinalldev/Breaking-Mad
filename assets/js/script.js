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
    'assets/images/bg images/Sunset.jpg',
    'assets/images/bg images/Swingset.jpg',
    'assets/images/bg images/Underwater Scene.webp',
    'assets/images/bg images/Waterfall.webp',

];

let currentIndex = 0; // makes the index start with the first image in the array (on line 0)
const newBgBtn = document.getElementById('newBgBtn'); // This gets the button

// Function to update the background image
function newBg() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to 0 after the last image so that we cycle through all images
    imageBox.style.backgroundImage = `url('${images[currentIndex]}')`; // Updates the image
    console.log(`Background changed to: ${images[currentIndex]} (Index: ${currentIndex})`); // Logs the change on the console so I can see what I'm doing
    randomPosish() // Randomises the postion of the quote
}
newBgBtn.addEventListener('click', changeBackground); // waits for the click


/// Randomised layout of the quote
var removeAlign;
var removeJustify;

function randomPosish() {
    let random3 = () => Math.floor(Math.random() * 3); // Get a random number 0-2

    let align;
    let justify;

    imageBox.classList.remove(removeAlign);
    imageBox.classList.remove(removeJustify);
    console.log("Removed:", removeAlign, removeJustify);


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
            justify = "justify-content-start", "text-start";
            break;
        case 1:
            justify = "justify-content-center", "text-center";
            break;
        case 2:
            justify = "justify-content-end", "text-end";
            break;
    }

    removeAlign = align;
    removeJustify = justify;

    // Add the new classes to imageBox
    imageBox.classList.add(align);
    imageBox.classList.add(justify);
    console.log("Added:", align, justify);
}


