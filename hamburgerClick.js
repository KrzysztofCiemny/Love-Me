const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');

const hamburgerNavClick = () => {
    hamburger.classList.toggle('hamburger-active');
    nav.classList.toggle('navigation-active');
}

export default hamburgerNavClick;