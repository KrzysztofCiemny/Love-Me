const aboutUsP = document.querySelector('.aboutUs-p');

const scrollAnimation = () => {
    window.addEventListener('scroll', animationActive);
    function animationActive() {
        const aboutUsPPosition = aboutUsP.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
    
        if(aboutUsPPosition < screenPosition) {
            aboutUsP.classList.add('aboutUs-p-active');
        }
    
    }
}
export default scrollAnimation;
