const windowHeight = window.innerHeight;
const galleryheader = document.querySelector('.gallery-header');
const servicesheader = document.querySelector('.services-header');
const footerheader = document.querySelector('.footer-h');

const scrollAnimations = () => {
    window.addEventListener('scroll', animationActive);

    function animationActive() {
        const galleryheaderTop = galleryheader.getBoundingClientRect().top;
        if(galleryheaderTop < windowHeight) {
            galleryheader.style.animation = 'translateAnimation 1s forwards ease-in-out';
        } 
        const servicesheaderTop = servicesheader.getBoundingClientRect().top;
        if(servicesheaderTop < windowHeight) {
            servicesheader.style.animation = 'translateAnimation 1s forwards ease-in-out';
        } 
        const footerheaderTop = footerheader.getBoundingClientRect().top;
        if(footerheaderTop < windowHeight) {
            footerheader.style.animation = 'translateAnimation 1s 1s forwards ease-in-out';
        } 
    }
}
export default scrollAnimations;
