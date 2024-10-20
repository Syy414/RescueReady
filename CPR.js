document.addEventListener("DOMContentLoaded", () => {
    const totalSteps = 6;
    let completedSteps = 0;
    const stepsStatus = new Array(totalSteps).fill(false);

    const stepDetails = {
        danger: {
            title: "D – Danger",
            description: "Ensure your own safety. Make sure there is no danger before approaching the injured person.",
            image: "images/danger.jpg"
        },
        response: {
            title: "R – Response",
            description: "Check for victim’s responsiveness. Gently tap on the victim's shoulder and say 'Sir/Madam, are you okay?'",
            image: "images/response.jpg"
        },
        shout: {
            title: "S – Shout for help",
            description: "Ask a bystander to call 999 for an ambulance with an AED.",
            image: "images/Shout.jpg"
        },
        airway: {
            title: "A – Airway",
            description: "Open the airway by using the Head-tilt/Chin-lift method.",
            image: "images/Head-tilt-chin-lift (research gate).png"
        },
        breathing: {
            title: "B – Breathing",
            description: "Assess for normal breathing. Check for signs of life by looking at the chest, neck, and face for more than 10 seconds.",
            image: "images/breathing.jpg"
        },
        compression: {
            title: "C – Compression",
            description: "Perform chest compressions and, if possible, use an AED.",
            image: "images/compression.jpg"
        }
    };

    const drsabcLetters = document.querySelectorAll(".drsabc-letter");
    const modal = document.getElementById("stepModal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.querySelector(".close");
    const compressionSubsections = document.getElementById("compression-subsections");
    const clickSound = document.getElementById("clickSound"); // Get audio element

    // Event listeners for each letter
    drsabcLetters.forEach(letter => {
        letter.addEventListener("click", () => {
            const step = letter.dataset.step;
            showModal(step);
        });
    });

    // Close modal on click
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal on pressing Esc
    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });

    // Show the modal with step details
    function showModal(step) {
        const stepDetail = stepDetails[step];

        modalTitle.textContent = stepDetail.title;
        modalDescription.textContent = stepDetail.description;
        modalImage.src = stepDetail.image;

        // Play click sound
        clickSound.currentTime = 0; // Rewind to the start
        clickSound.play(); // Play the sound

        if (step === "compression") {
            compressionSubsections.style.display = "block"; // Show compression subsections
        } else {
            compressionSubsections.style.display = "none"; // Hide it for other steps
        }

        modal.style.display = "block";

        // Mark step as completed
        if (!stepsStatus[step - 1]) {
            completedSteps++;
            stepsStatus[step - 1] = true;
            updateProgressBar();
        }
    }

    // Update the progress bar
    function updateProgressBar() {
        const progressPercentage = (completedSteps / totalSteps) * 100;
        document.getElementById("progress-bar").style.width = `${progressPercentage}%`;
    }

    // Expandable sections for compression subsections
    const expandableTitles = document.querySelectorAll(".expandable-title");
    expandableTitles.forEach(title => {
        title.addEventListener("click", () => {
            const content = title.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });
});
