import mobileNav_1 from './modules/mobile-nav_1.js';
mobileNav_1();

// Элементы на странице
const slider = document.querySelector('#swipe');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

sliderItems.forEach(function(slide, index) {
    console.log(slide);

    // Скрываем все слайды, кроме первого
    if (index !== 0) slide.classList.add('hidden');

    // Добавляем индексы для слайдов
    slide.dataset.index = index;

    // Добавляем data атрибут active для первого/активного слайда
    sliderItems[0].setAttribute('data-active', '');

    // Клик по слайдам
    slide.addEventListener('click', function(){

        showNextSlide('next');
        
        // // Скрываем текущий слайд
        // slide.classList.add('hidden');
        // slide.removeAttribute('data-active');

        // // Рассчитываем индекс следующего слайда        
        // const nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;

        // // Показываем следующий слайд
        // const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

        // // Отображаем следующий слайд
        // nextSlide.classList.remove('hidden');
        // nextSlide.setAttribute('data-active', '');
    })
});

btnNext.onclick = function () {
    console.log('Next Slide');
    showNextSlide('next');

    // // Скрываем текущий слайд
    // const currentSlide = slider.querySelector(`[data-active]`);    
    // const currentSlideIndex = +currentSlide.dataset.index;
    // console.log(currentSlideIndex);

    // currentSlide.classList.add('hidden');
    // currentSlide.removeAttribute('data-active');

    // // Показываем следующий слайд
    // const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    // const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    // nextSlide.classList.remove('hidden');
    // nextSlide.setAttribute('data-active', '');
};

btnPrev.onclick = function () {
    console.log('Prev Slide');
    showNextSlide('prev');

    // // Скрываем текущий слайд
    // const currentSlide = slider.querySelector(`[data-active]`);    
    // const currentSlideIndex = +currentSlide.dataset.index;
    // console.log(currentSlideIndex);
    // currentSlide.classList.add('hidden');
    // currentSlide.removeAttribute('data-active');

    // // Показываем следующий слайд
    // const nextSlideIndex = currentSlideIndex  === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    // const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    // nextSlide.classList.remove('hidden');
    // nextSlide.setAttribute('data-active', '');
};

function showNextSlide(direction) {

    // Скрываем текущий слайд
    const currentSlide = slider.querySelector(`[data-active]`);    
    const currentSlideIndex = +currentSlide.dataset.index;
    console.log(currentSlideIndex);
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');


    // Рассчитываем следущий индекс зависимости от направления движения

    let nextSlideIndex;

    if (direction === 'next') {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    } else if (direction === 'prev') {
        nextSlideIndex = currentSlideIndex  === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    }

    // Показываем следующий слайд
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
};