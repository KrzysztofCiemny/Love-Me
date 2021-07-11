export const hamburger = document.querySelector('.hamburger');
export const nav = document.querySelector('.navigation');

const hamburgerNavClick = () => {
    hamburger.addEventListener('click', () =>{
        hamburger.classList.toggle('hamburger-active');
        nav.classList.toggle('navigation-active');
    });
}

export default hamburgerNavClick;