// Select kit lid and contents
const kit = document.getElementById('kit');
const kitContentsModal = document.getElementById('kit-contents-modal');
const closeContentsBtn = document.getElementById('close-contents');
const kitItems = document.querySelectorAll('.kit-item');
const componentInfoModal = document.getElementById('component-info-modal');
const closeInfoBtn = document.getElementById('close-info');
const infoText = document.getElementById('info-text');
const componentName = document.getElementById('component-name'); // Reference to the component name

// Audio elements for opening and closing sounds
const openLidSound = document.getElementById('open-lid-sound');
const closeLidSound = document.getElementById('close-lid-sound');
const componentClickSound = document.getElementById('component-click-sound'); // New click sound

// Ensure the kit remains open when interacting with components
let isKitOpen = false;

// Open the kit contents modal when the kit is clicked
kit.addEventListener('click', (event) => {
    if (!isKitOpen) {
        openLidSound.play();  // Play open sound
        kit.classList.add('open');
        setTimeout(() => {
            kitContentsModal.style.display = 'block';
        }, 600); // Delay showing contents to match the lid animation
        isKitOpen = true;
    }
    event.stopPropagation(); // Prevent this click from affecting the kit's open state
});

// Close the kit contents modal and reset state when the close button is clicked
closeContentsBtn.addEventListener('click', () => {
    closeLidSound.play();  // Play close sound
    kit.classList.remove('open');
    kitContentsModal.style.display = 'none';
    isKitOpen = false;
});

// Open component info modal when a kit item (image) is clicked
kitItems.forEach(item => {
    item.addEventListener('click', (event) => {
        const guide = item.getAttribute('data-guide');
        const componentAlt = item.querySelector('img').alt; // Get the alt text from the image

        infoText.textContent = guide; // Set the text in the info modal
        componentName.textContent = componentAlt; // Set the component name in the title

        // Play the click sound effect
        componentClickSound.play();

        componentInfoModal.style.display = 'block'; // Show the component info modal
        event.stopPropagation(); // Prevent closing the kit contents modal
    });
});

// Close the component info modal
closeInfoBtn.addEventListener('click', () => {
    componentInfoModal.style.display = 'none';
});

// Prevent the kit from closing when interacting with components and modals
window.addEventListener('click', (event) => {
    // Close the kit lid if clicked outside the kit and modal areas
    if (isKitOpen && !kit.contains(event.target) && !kitContentsModal.contains(event.target) && !componentInfoModal.contains(event.target)) {
        kit.classList.remove('open');
        closeLidSound.play();  // Play close sound
        kitContentsModal.style.display = 'none'; // Hide kit contents
        componentInfoModal.style.display = 'none'; // Hide component info
        isKitOpen = false;
    }
});
