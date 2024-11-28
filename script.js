













const images = [
    'assets/images/bg images/Forest.webp',
    'assets/images/bg images/Sunset.jpg',
    'assets/images/bg images/Swingset.jpg',
    'assets/images/bg images/Underwater Scene.webp',
    'assets/images/bg images/Waterfall.webp',

];

let currentIndex = 0;
const imageBox = document.getElementById('imageBox'); 
const newBgBtn = document.getElementById('newBgBtn'); 

// Function to update the background image
function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    imageBox.style.backgroundImage = `url('${images[currentIndex]}')`;
    console.log(`Background changed to: ${images[currentIndex]} (Index: ${currentIndex})`);
}

newBgBtn.addEventListener('click', changeBackground);
