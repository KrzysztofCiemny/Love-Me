// const aboutUsElement = document.querySelector('#aboutUsLink');
const aboutUs = document.querySelector('.AboutUs-Container');

export function scrollToElement() {
    aboutUs.scrollIntoView({
        behavior: "smooth"
    });
}

export function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

