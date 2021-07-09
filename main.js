import hamburgerNavClick from "./hamburgerClick.js";
import dropDownServices from "./services.js";
import {scrollToTop, scrollToElement} from "./scrollToTop.js";
import slider from "./slider.js";

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', hamburgerNavClick);


dropDownServices();
slider();

const aboutUsLink = document.querySelector('#aboutUsLink');
aboutUsLink.addEventListener('click', scrollToElement)

const scrollToTopBtn = document.querySelector('.scrollUp');
scrollToTopBtn.addEventListener('click', scrollToTop);
