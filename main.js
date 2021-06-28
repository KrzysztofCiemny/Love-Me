import hamburgerNavClick from "./hamburgerClick.js";
import dropDownServices from "./services.js";
import scrollToTop from "./scrollToTop.js";

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', hamburgerNavClick);

// const dropDownButtons = document.querySelectorAll('.icon-down-open-mini');
// dropDownButtons.forEach(button => {
//     button.addEventListener('click', dropDownServices);
// });
dropDownServices();

const scrollToTopBtn = document.querySelector('.scrollUp');
scrollToTopBtn.addEventListener('click', scrollToTop);
