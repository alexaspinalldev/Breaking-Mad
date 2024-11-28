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















