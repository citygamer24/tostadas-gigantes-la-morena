// Initialize Lucide icons
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const menuIcon = document.querySelector('.logo i');
    const nav = document.querySelector('nav');
    
    menuIcon?.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });

    // Hide menu on window resize (above mobile breakpoint)
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});