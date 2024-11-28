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
function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to 0 after the last image so that we cycle through all images
    imageBox.style.backgroundImage = `url('${images[currentIndex]}')`; // Updates the image
    console.log(`Background changed to: ${images[currentIndex]} (Index: ${currentIndex})`); // Logs the change on the console so I can see what I'm doing
}
newBgBtn.addEventListener('click', changeBackground); // waits for the click