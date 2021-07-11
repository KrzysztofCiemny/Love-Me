const services = document.querySelectorAll('.services');
const arrowIcons = document.querySelectorAll('.icon-down-open-mini');

const dropDownServices = () => {
    arrowIcons.forEach(icon => icon.addEventListener('click', dropDown));

    function dropDown(e) {
        const iconClicked = e.target;

        services.forEach(service => {
            if(service.dataset.collapse === iconClicked.dataset.index) {
                service.classList.toggle('services-active');
                iconClicked.classList.toggle('icon-rotate');
            }
        });
    }
}

export default dropDownServices;