// script.js

// Function to scroll to a specific section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Function to add animation classes to elements
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate__animated');
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('animate__fadeIn');
        } else {
            element.classList.remove('animate__fadeIn');
        }
    });
}

// Helper function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Event listener for scrolling to apply animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
// script.js

// Function to scroll to a specific section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Function to add animation classes to elements
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate__animated');
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('animate__fadeIn');
        } else {
            element.classList.remove('animate__fadeIn');
        }
    });
}

// Helper function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Event listener for scrolling to apply animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Additional hover effect for buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('animate__pulse');
    });
    button.addEventListener('mouseleave', () => {
        button.classList.remove('animate__pulse');
    });
});
