document.addEventListener('DOMContentLoaded', function () {
    const powerBtn = document.getElementById('power-btn');
    const shockBtn = document.getElementById('shock-btn');
    const screenText = document.getElementById('screen-text');
    const padLeft = document.getElementById('pad-left');
    const padRight = document.getElementById('pad-right');

    let aedPoweredOn = false;
    let leftPadPlaced = false;
    let rightPadPlaced = false;

    // Power Button click event
    powerBtn.addEventListener('click', function () {
        if (!aedPoweredOn) {
            aedPoweredOn = true;
            screenText.textContent = 'AED On. Attach pads to victim.';
            padLeft.style.display = 'block';
            padRight.style.display = 'block';
            shockBtn.disabled = true;
        } else {
            aedPoweredOn = false;
            screenText.textContent = 'Press Power to start';
            padLeft.style.display = 'none';
            padRight.style.display = 'none';
            shockBtn.disabled = true;
            leftPadPlaced = false;
            rightPadPlaced = false;
            padLeft.style.backgroundColor = '';
            padRight.style.backgroundColor = '';
        }
    });

    // Click event for left pad
    padLeft.addEventListener('click', function () {
        if (aedPoweredOn && !leftPadPlaced) {
            leftPadPlaced = true;
            padLeft.style.backgroundColor = 'green';
            checkPads();
        }
    });

    // Click event for right pad
    padRight.addEventListener('click', function () {
        if (aedPoweredOn && !rightPadPlaced) {
            rightPadPlaced = true;
            padRight.style.backgroundColor = 'green';
            checkPads();
        }
    });

    // Check if both pads are placed
    function checkPads() {
        if (leftPadPlaced && rightPadPlaced) {
            screenText.textContent = 'Pads Placed. Analyzing heart rhythm...';
            setTimeout(() => {
                screenText.textContent = 'Shock advised. Press Shock.';
                shockBtn.disabled = false;
                shockBtn.style.backgroundColor = '#ff5722';
            }, 3000);
        }
    }

    // Shock Button click event
    shockBtn.addEventListener('click', function () {
        if (!shockBtn.disabled) {
            screenText.textContent = 'Delivering shock...';
            setTimeout(() => {
                screenText.textContent = 'Shock delivered.';
                shockBtn.disabled = true;
            }, 2000);
        }
    });

    // Info Section Toggle
    document.querySelectorAll('.info-section').forEach(section => {
        section.addEventListener('click', () => {
            const content = section.querySelector('.info-content');
            const isVisible = content.style.display === 'block';

            // Hide all content first
            document.querySelectorAll('.info-content').forEach(el => {
                el.style.display = 'none';
            });

            // Toggle the clicked content
            content.style.display = isVisible ? 'none' : 'block';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const infoBoxes = document.querySelectorAll('.info-box');

    infoBoxes.forEach(box => {
        box.addEventListener('click', () => {
            box.classList.toggle('active');
        });
    });
});