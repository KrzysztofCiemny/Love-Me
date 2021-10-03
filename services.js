const services = document.querySelectorAll('.services');
const serviceLinks = document.querySelectorAll('.servicesDropDown');
const icons = document.querySelectorAll('.icon-down-open');

const dropDownServices = () => {
    serviceLinks.forEach(link => link.addEventListener('click', dropDown));

    function dropDown(e) {
        const linkClicked = e.target;

        services.forEach(service => {
            if(service.dataset.collapse === linkClicked.dataset.index) {
                service.classList.toggle('services-active');
            }
        });
        icons.forEach(icon => {
            if(icon.dataset.rotate === linkClicked.dataset.index) {
                icon.classList.toggle('icon-rotate');
            }
        });
    }
}

export default dropDownServices;