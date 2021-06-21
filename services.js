const services = document.querySelector('.services');
const arrowIcon = document.querySelector('.icon-down-open-mini');

const dropDownServices = () => {
    services.classList.toggle('services-active');
    arrowIcon.classList.toggle('icon-rotate');
}

export default dropDownServices;