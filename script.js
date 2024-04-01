window.addEventListener('scroll', function() {
    var scrollSection = document.querySelector('.scroll-section');
    if (window.scrollY > 0) {
        scrollSection.style.opacity = '0'; // Fade out
    } else {
        scrollSection.style.opacity = '1'; // Fade in
    }
});