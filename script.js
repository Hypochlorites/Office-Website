const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    if(navLinks.getAttribute("data-visible") === "false" || navLinks.getAttribute("data-visible") === "null" ) {
        navLinks.setAttribute("data-visible", true);
    } else {
        navLinks.setAttribute("data-visible", false);
    }
})

const mediaQuery = window.matchMedia('(min-width: 768px)')

mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
        navLinks.setAttribute("data-visible", null)
    }
})
