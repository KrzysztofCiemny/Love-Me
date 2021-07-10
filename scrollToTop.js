const navLinks = document.querySelectorAll('.nav_item');
const elements = document.querySelectorAll('.scroll-to-element');
const scrollToTopBtn = document.querySelector('.scrollUp');

console.log(elements);


function scrollTo() {
    navLinks.forEach(navLink => navLink.addEventListener('click', scrollToElement));

    function scrollToElement(e) {
        const navLinkClicked = e.target;

        elements.forEach(element => {
            if(element.dataset.scrollTo === navLinkClicked.dataset.navIndex) {
                element.scrollIntoView({
                    behavior: "smooth"
                });
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
}
export default scrollTo;
