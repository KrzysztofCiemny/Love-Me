import hamburgerNavClick from "./hamburgerClick.js";
import dropDownServices from "./services.js";

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', hamburgerNavClick);

const dropDownButton = document.querySelector('.dropDownButton');
dropDownButton.addEventListener('click', dropDownServices);