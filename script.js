// ===================================
// Modern JavaScript
// ===================================

// Document Ready - Modern approach
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    // Initialize application
    init();
});

/**
 * Initialize the application
 */
function init() {
    // Setup event listeners
    setupNavigation();
    
    // Display welcome message
    console.log('Welcome to the Modern Web Project!');
}

/**
 * Setup smooth scrolling for navigation links
 */
function setupNavigation() {
    // Get all anchor links that start with #
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Example: Utility function to handle API calls
 * @param {string} url - The API endpoint
 * @returns {Promise} - Fetch promise
 */
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Example: Export for module usage (if using ES6 modules)
// export { init, setupNavigation, fetchData };
