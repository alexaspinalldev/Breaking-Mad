/// Global variables
const imageBox = document.getElementById("imageBox");
const quoteBox = document.getElementById("quoteBox");
const authorBox = document.getElementById("authorBox");

const newQuoteBtn = document.getElementById("newQuoteBtn");
const newBgBtn = document.getElementById("newBgBtn");

/// Evt listeners for the buttons go here

/// ------- Functions ------- ///
// Generate new quote and background
function newQuote(); {
fetch { blah blah blah data.json
}
let quoteBox.innerText = data.quote
let authorBox.innerText = data.author
newBg()
}

// Cycle Background
function newBg(); {
// get a random number 0-8 > Switch cases to apply background to div

- Math.floor(Math.random() * 8 + 1)
}