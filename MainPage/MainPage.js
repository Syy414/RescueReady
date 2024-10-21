// Constants for the grid, title, new content, and hyper text
const gridContainer = document.getElementById('grid-container');
const title = document.getElementById('title');
const newContent = document.getElementById('new-content');
const hyperTextElement = document.getElementById('hyperText');

// Create 500 grid items
for (let i = 0; i < 500; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
}

// Function to randomly change the color of grid items
function randomizeGridColor() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = '#f0f0f0';
    });

    const randomCount = Math.floor(Math.random() * 50) + 10;
    for (let i = 0; i < randomCount; i++) {
        const randomIndex = Math.floor(Math.random() * gridItems.length);
        gridItems[randomIndex].style.backgroundColor = '#cccccc';
    }
}

// Start the randomization immediately
randomizeGridColor();

// Set an interval to randomize grid color every 2 seconds
setInterval(randomizeGridColor, 2000);

// Function to activate the fade-out effect
function activateFadeOutEffect() {
    // Fade out the title and grid simultaneously
    title.style.opacity = '0';
    gridContainer.style.opacity = '0';

    // Show new content after the fade-out animation completes
    setTimeout(() => {
        gridContainer.style.display = 'none'; // Hide the grid
        newContent.classList.add('show'); // Show the new content
    }, 500); // Wait for the fade-out duration
}

// Show grid for 2 seconds then redirect to content
setTimeout(activateFadeOutEffect, 2000); // Wait for 2 seconds before starting the transition

// Ensure the grid is visible initially
gridContainer.style.display = 'grid';

// Carousel functionality
let currentSlide = 0;
const buttons = document.querySelectorAll('.carousel-button');

function showSlide(index) {
    buttons.forEach((button, i) => {
        button.classList.remove('active');
        if (i === index) {
            button.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = buttons.length - 1; // Loop to last button
    } else if (currentSlide >= buttons.length) {
        currentSlide = 0; // Loop to first button
    }
    showSlide(currentSlide);
}

// Initialize carousel
showSlide(currentSlide);

// Hyper-changing text functionality
const texts = [
    'Welcome To Rescue Ready'
];

let index = 0;
let letterIndex = 0;
let interval;
let textChanged = false; // Flag to track if text has changed

// Function to change the text one letter at a time
function changeText() {
    if (letterIndex < texts[index].length) {
        hyperTextElement.textContent = texts[index].slice(0, letterIndex + 1);
        letterIndex++;
    } else {
        clearInterval(interval); // Stop the interval once the text is fully displayed
        textChanged = true; // Set flag to true after one full cycle
    }
}

// Start the text change interval automatically
interval = setInterval(changeText, 200); // Change text every 200 milliseconds

// Call changeText to start changing text immediately on page load
changeText();

// Add event listener for the About Us button
document.getElementById('aboutUsButton').addEventListener('click', function() {
    const aboutContent = document.getElementById('aboutContent');
    // Toggle display of the aboutContent
    aboutContent.style.display = aboutContent.style.display === 'block' ? 'none' : 'block'; // Toggle visibility
});

// Add event listener for the Introduction button
document.getElementById('introductionButton').addEventListener('click', function() {
    const introductionContent = document.getElementById('introductionContent');
    // Toggle display of the introductionContent
    introductionContent.style.display = introductionContent.style.display === 'block' ? 'none' : 'block'; // Toggle visibility
});

// Add event listener for the FAQ button
document.getElementById('FAQButton').addEventListener('click', function() {
    const FAQContent = document.getElementById('FAQContent');
    // Toggle display of the introductionContent
    FAQContent.style.display = FAQContent.style.display === 'block' ? 'none' : 'block'; // Toggle visibility
});
