import {hamburger, nav} from "./hamburgerClick.js";

const navLinks = document.querySelectorAll('.nav_item');
const elements = document.querySelectorAll('.scroll-to-element');
const scrollToTopBtn = document.querySelector('.scrollUp');
const scrollDown = document.querySelector('.scrollDown');
const aboutUs = document.querySelector('.AboutUs-Container');

function scrollTo() {
    navLinks.forEach(navLink => navLink.addEventListener('click', scrollToElement));
    function scrollToElement(e) {
        const navLinkClicked = e.target;

        elements.forEach(element => {
            if(element.dataset.scrollTo === navLinkClicked.dataset.navIndex) {
                element.scrollIntoView({
                    behavior: "smooth"
                });
                hamburger.classList.toggle('hamburger-active');
                nav.classList.toggle('navigation-active');
            }
        });
    }
    scrollToTopBtn.addEventListener('click', scrollToTop);
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
    scrollDown.addEventListener('click', () => {
        aboutUs.scrollIntoView({
            behavior: "smooth"
        });
    });
}
export default scrollTo;
