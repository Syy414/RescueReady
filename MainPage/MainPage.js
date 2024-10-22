// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Hero Section for Slideshow
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const searchInput = document.getElementById('search-bar');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            slide.classList.remove('active');
            dots[idx].classList.remove('active');
            if (idx === index) {
                slide.classList.add('active');
                dots[idx].classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Initialize the first slide
    showSlide(0);

    // Automatically change slides every 5 seconds
    setInterval(nextSlide, 5000);

    // Add click event for navigation dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Mobile Menu Toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileMenuButton.classList.toggle('active');

            // Change button icon based on menu state
            const icon = mobileMenuButton.querySelector('i');
            icon.classList.toggle('fa-bars', !mobileMenu.classList.contains('active'));
            icon.classList.toggle('fa-times', mobileMenu.classList.contains('active'));
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu && mobileMenu.classList.contains('active') &&
            !mobileMenu.contains(e.target) &&
            !mobileMenuButton.contains(e.target)) {
            mobileMenu.classList.remove('active');
            mobileMenuButton.classList.remove('active');
            const icon = mobileMenuButton.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Form Validation
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = contactForm.querySelector('#name').value;
            const email = contactForm.querySelector('#email').value;
            const message = contactForm.querySelector('#message').value;

            let isValid = true;
            const errors = [];

            // Basic validation
            if (!name.trim()) {
                errors.push('Name is required');
                isValid = false;
            }

            if (!email.trim() || !email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
                errors.push('Valid email is required');
                isValid = false;
            }

            if (!message.trim()) {
                errors.push('Message is required');
                isValid = false;
            }

            if (!isValid) {
                showErrors(errors);
            } else {
                // Submit form
                console.log('Form submitted:', { name, email, message });
                contactForm.reset();
                showSuccess('Message sent successfully!');
            }
        });
    }

    // Error and Success message display functions
    function showErrors(errors) {
        const errorDiv = document.querySelector('.form-errors') ||
            document.createElement('div');
        errorDiv.className = 'form-errors';
        errorDiv.innerHTML = errors.map(error => `<p class="error">${error}</p>`).join('');

        if (!document.querySelector('.form-errors')) {
            contactForm.insertBefore(errorDiv, contactForm.firstChild);
        }
    }

    function showSuccess(message) {
        const successDiv = document.querySelector('.form-success') ||
            document.createElement('div');
        successDiv.className = 'form-success';
        successDiv.innerHTML = `<p>${message}</p>`;

        if (!document.querySelector('.form-success')) {
            contactForm.insertBefore(successDiv, contactForm.firstChild);
        }

        // Remove success message after 3 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }

    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Filter topics based on search input
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        const topics = document.querySelectorAll('.topic-card');

        topics.forEach(topic => {
            const text = topic.dataset.topic.toLowerCase();
            topic.style.display = text.includes(filter) ? 'block' : 'none';
        });
    });

    // Accordion functionality for FAQs
    const accordionItems = document.querySelectorAll('.accordion-item h3');
    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentElement;
            const content = parent.querySelector('.accordion-content');
            const plusMinusSign = item.querySelector('.plus-minus'); // Select the plus/minus sign

            parent.classList.toggle('active');
            content.style.display = parent.classList.contains('active') ? 'block' : 'none';

            // Toggle between plus and minus
            if (parent.classList.contains('active')) {
                plusMinusSign.textContent = '-'; // Change to minus when expanded
            } else {
                plusMinusSign.textContent = '+'; // Change to plus when collapsed
            }
        });
    });

    // Initializing active dot
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === 0) { // Default to the first section
                dot.classList.add('active');
            }
        });
    }

    updateDots(); // Initialize dots

    // Get video and content elements
    const video = document.getElementById('background-video');
    const mainContent = document.getElementById('main-content');

    // Listen for when the video ends
    video.addEventListener('ended', () => {
        // Apply zoom-in animation to the video container
        document.getElementById('video-container').classList.add('reveal-animation');

        // After animation ends, hide video and show main content
        setTimeout(() => {
            document.getElementById('video-container').style.display = 'none';
            mainContent.classList.remove('hidden');
        }, 1500);  // Match this timeout to animation duration
    });
});
