import mobileNav_1 from './modules/mobile-nav_1.js';
mobileNav_1();


const slider = document.querySelector('#swipe');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

sliderItems.forEach(function(slide, index) {
    console.log(slide);
    
    if (index !== 0) slide.classList.add('hidden');    
    slide.dataset.index = index;
    sliderItems[0].setAttribute('data-active', '');
    slide.addEventListener('click', function(){
        showNextSlide('next');      
    })
});

btnNext.onclick = function () {
    console.log('Next Slide');
    showNextSlide('next');
};

btnPrev.onclick = function () {
    console.log('Prev Slide');
    showNextSlide('prev');
};

function showNextSlide(direction) {
    const currentSlide = slider.querySelector(`[data-active]`);    
    const currentSlideIndex = +currentSlide.dataset.index;
    console.log(currentSlideIndex);
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    let nextSlideIndex;

    if (direction === 'next') {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    } else if (direction === 'prev') {
        nextSlideIndex = currentSlideIndex  === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    }
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
};