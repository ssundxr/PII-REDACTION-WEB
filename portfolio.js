// Smooth Scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky navigation bar that hides on scroll down and appears on scroll up
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll Down
        if (window.scrollY > 100) { // Only hide after scrolling a bit
             navbar.style.top = '-150px'; // Adjust based on navbar height
        }
    } else {
        // Scroll Up
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}, false);
