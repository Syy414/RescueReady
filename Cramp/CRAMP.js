// JavaScript to toggle the details of each cramp section
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const crampDetails = button.closest('.cramp-box').querySelector('.cramp-details');

        if (crampDetails.style.display === 'block') {
            crampDetails.style.display = 'none';
            button.textContent = '>>>'; // Change back to right arrow when closed
        } else {
            crampDetails.style.display = 'block';
            button.textContent = '<<<'; // Change to left arrow when opened
        }
    });
});
