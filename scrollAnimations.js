const windowHeight = window.innerHeight;
const aboutUsP = document.querySelector('.aboutUs-p');
const firstPerson = document.querySelectorAll('.first-person-anim');
const firstPersonP = document.querySelector('.first-person-p-anim');
const secondPerson = document.querySelectorAll('.second-person-anim');
const secondPersonP = document.querySelector('.second-person-p-anim');
const slider = document.querySelector('.slider-container');
const servicesH = document.querySelectorAll('.services-h');
const servicesIcon = document.querySelectorAll('.icon-down-open-mini');
const addressDivs = document.querySelectorAll('.address-anim');
const socialLinks = document.querySelectorAll('.socials-anim');
const socialNames = document.querySelectorAll('.socialName');
const footerH = document.querySelector('.footer-h');
const footerSocials = document.querySelector('.footSocials');

const scrollAnimations = () => {
    window.addEventListener('scroll', animationActive);

    function animationActive() {
        const aboutUsPTop = aboutUsP.getBoundingClientRect().top;
        if(aboutUsPTop < windowHeight) {
            aboutUsP.style.animation = 'aboutUsSectionTranslate 1s forwards ease-in-out';
        } 
        const firstPersonTop = firstPerson[1].getBoundingClientRect().top;
        if(firstPersonTop < windowHeight) {
            firstPerson[0].style.animation = 'aboutUsSectionTranslate 1s forwards ease-in-out';
            firstPerson[1].style.animation = 'aboutUsSectionTranslate 1s 0.4s forwards ease-in-out';
        }
        const firstPersonPTop = firstPersonP.getBoundingClientRect().top;
        if(firstPersonPTop < windowHeight) {
            firstPersonP.style.animation = 'aboutUsSectionTranslate 1s forwards ease-in-out';
        }
        const secondPersonTop = secondPerson[1].getBoundingClientRect().top;
        if(secondPersonTop < windowHeight) {
            secondPerson[0].style.animation = 'aboutUsSectionTranslate 1s forwards ease-in-out';
            secondPerson[1].style.animation = 'aboutUsSectionTranslate 1s 0.4s forwards ease-in-out';
        }
        const secondPersonPTop = secondPersonP.getBoundingClientRect().top;
        if(secondPersonPTop < windowHeight) {
            secondPersonP.style.animation = 'aboutUsSectionTranslate 1s forwards ease-in-out';
        }
        const sliderTop = slider.getBoundingClientRect().top;
        if(sliderTop < windowHeight) {
            slider.style.animation = 'sliderScale 1s forwards ease-in-out';
        }
        const servicesTop = servicesH[1].getBoundingClientRect().top;
        if(servicesTop < windowHeight) {
            servicesH[0].style.animation = 'servicesTranslate 1s forwards ease-in-out';
            servicesH[1].style.animation = 'servicesTranslate 1s 0.2s forwards ease-in-out';
            servicesH[2].style.animation = 'servicesTranslate 1s 0.4s forwards ease-in-out';
            servicesH[3].style.animation = 'servicesTranslate 1s 0.6s forwards ease-in-out';
            servicesIcon[0].style.animation = 'servicesTranslate 1s 0.1s forwards ease-in-out';
            servicesIcon[1].style.animation = 'servicesTranslate 1s 0.3s forwards ease-in-out';
            servicesIcon[2].style.animation = 'servicesTranslate 1s 0.5s forwards ease-in-out';
            servicesIcon[3].style.animation = 'servicesTranslate 1s 0.7s forwards ease-in-out';
        }
        const addressTop = addressDivs[1].getBoundingClientRect().top;
        if(addressTop < windowHeight) {
            addressDivs[0].style.animation = 'contactTranslate 1s forwards ease-in-out';
            addressDivs[1].style.animation = 'contactTranslate 1s 0.4s forwards ease-in-out';
        }
        const socialsTop = socialNames[1].getBoundingClientRect().top;
        if(socialsTop < windowHeight) {
            socialLinks[0].style.animation = 'contactTranslate 0.7s forwards ease-in-out';
            socialLinks[1].style.animation = 'contactTranslate 0.7s 0.2s forwards ease-in-out';
            socialLinks[2].style.animation = 'contactTranslate 0.7s 0.4s forwards ease-in-out';
            socialNames[0].style.animation = 'contactTranslate 0.7s 0.1s forwards ease-in-out';
            socialNames[1].style.animation = 'contactTranslate 0.7s 0.3s forwards ease-in-out';
            socialNames[2].style.animation = 'contactTranslate 0.7s 0.5s forwards ease-in-out';
        }
        const footerHTop = footerH.getBoundingClientRect().top;
        if(footerHTop < windowHeight) {
            footerH.style.animation = 'footerAnimation 0.7s forwards ease-in-out';
            footerSocials.style.animation = 'footerAnimation 0.7s 0.2s forwards ease-in-out';
        }
    }
}
export default scrollAnimations;
