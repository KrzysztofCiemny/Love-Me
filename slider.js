const showMore = document.querySelector('.show-more');
const images = document.querySelectorAll('.show-images');
const showLess = document.querySelector('.show-less');

const dropDownGallery = () => {
    showMore.addEventListener('click', showMoreImages);
    let howManyTimesClicked = 0;

    function showMoreImages() {
        if(howManyTimesClicked === 0) images[0].classList.add('images-active');
        if(howManyTimesClicked === 1) {
            images[1].classList.add('images-active');
            showMore.style.display = 'none';
            showLess.style.display = 'flex';
        }

        howManyTimesClicked++;
        if(howManyTimesClicked > 1) howManyTimesClicked = 0;
    }

    showLess.addEventListener('click', showLessImages);
    function showLessImages() {
        images.forEach(image => {
            image.classList.remove('images-active');
        });
        showLess.style.display = 'none';
        showMore.style.display = 'flex';
    }
}

export default dropDownGallery;

