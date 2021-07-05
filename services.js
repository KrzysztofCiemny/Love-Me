const services = document.querySelectorAll('.services');
const arrowIcons = document.querySelectorAll('.icon-down-open-mini');

console.log(services);

const dropDownServices = () => {

    arrowIcons.forEach(icon => {
        icon.addEventListener('click', dropDown);
    });

    // console.log(icon);
    function dropDown() {
        services[1].classList.toggle('services-active');
    }
}

export default dropDownServices;