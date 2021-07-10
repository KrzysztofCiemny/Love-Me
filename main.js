import hamburgerNavClick from "./hamburgerClick.js";
import dropDownServices from "./services.js";
import scrollTo from "./scrollTo.js";
import slider from "./slider.js";

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', hamburgerNavClick);

dropDownServices();
slider();
scrollTo();
