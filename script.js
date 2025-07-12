// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Set copyright year
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Navigation functionality
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');
    const buttons = document.querySelectorAll('.btn');
    
    // Function to switch sections
    function switchSection(sectionId) {
        // Hide all sections
        contentSections.forEach(section => {
            section.classList.remove('active-section');
        });
        
        // Show selected section
        document.getElementById(sectionId).classList.add('active-section');
        
        // Update active nav item
        navItems.forEach(item => {
            item.classList.toggle('active', item.dataset.section === sectionId);
        });
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Nav item click event
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            switchSection(this.dataset.section);
        });
    });
    
    // Button click event
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            switchSection(this.dataset.section);
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Initialize - show home section
    switchSection('home');
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.resume-item, .project-card, .about-content p');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.resume-item, .project-card, .about-content p').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
    });
    
    // Run on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});
