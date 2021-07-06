const slides = document.querySelector('.slides');
const slidesImages = document.querySelectorAll('.slides img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let imageCounter = 1;
const imageWidth = slidesImages[0].getBoundingClientRect().width;

let autoSlideTimer = setInterval(autoSlide, 6000);

function slider() {
    slides.style.transform = 'translateX(' +(-imageWidth * imageCounter) + 'px)';

    slides.addEventListener('transitionend', jumpToFirstImage);
    nextBtn.addEventListener('click', goToNextSlide);
    prevBtn.addEventListener('click', goToPrevSlide);
}

function autoSlide() {
    if(imageCounter >= slidesImages.length -1) return;
    slides.style.transition = "transform 0.5s ease-in-out";
    imageCounter++;
    slides.style.transform = 'translateX(' +(-imageWidth * imageCounter) + 'px)';
}
function resetAutoSlideTimer() {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(autoSlide, 6000);
}

function jumpToFirstImage() {
    if(slidesImages[imageCounter].id === 'lastClone') {
        slides.style.transition = "none";
        imageCounter = slidesImages.length - 2;
        slides.style.transform = 'translateX(' +(-imageWidth * imageCounter) + 'px)';
    }
    if(slidesImages[imageCounter].id === 'firstClone') {
        slides.style.transition = "none";
        imageCounter = slidesImages.length - imageCounter;
        slides.style.transform = 'translateX(' +(-imageWidth * imageCounter) + 'px)';
    }
}
function goToNextSlide() {
    resetAutoSlideTimer()
    if(imageCounter >= slidesImages.length -1) return;
    slides.style.transition = "transform 0.5s ease-in-out";
    imageCounter++;
    slides.style.transform = 'translateX(' +(-imageWidth * imageCounter) + 'px)';
}
function goToPrevSlide() {
    resetAutoSlideTimer()
    if(imageCounter <= 0) return;
    slides.style.transition = "transform 0.5s ease-in-out";
    imageCounter--;
    slides.style.transform = 'translateX(' +(-imageWidth * imageCounter) + 'px)';
}

export default slider;

