document.addEventListener('DOMContentLoaded', () => {
    // === Smooth Scrolling for Navigation ===
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // === Dark Mode Toggle Functionality ===
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Set initial theme based on localStorage
    if (isDarkMode) {
        body.classList.add('dark-mode');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');

        // Update the icon
        if (isDark) {
            themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        } else {
            themeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
        }

        // Save preference to localStorage
        localStorage.setItem('darkMode', isDark);
    });
});

// Note: For the contact form to work, you will need to replace the form's 'action' 
// attribute with a service like Formspree or Netlify Forms, as GitHub Pages is a static host.