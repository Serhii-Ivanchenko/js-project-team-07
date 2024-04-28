import { initSwiper } from './swiper';

const aboutmeSwiper = initSwiper('.aboutme-swiper', {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 2,
  direction: 'horizontal',
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },
  navigation: {
    nextEl: '.aboutme-slide-next',
    // prevEl: '.projects-button-prev',
  },
});
const nextSlideBtn = document.querySelector('.aboutme-slide-next');
nextSlideBtn.addEventListener('click', e => {
  console.log('click-nextSlideBtn');
  aboutmeSwiper.slideNext();
});

// const nextSlideBtnAll = document.querySelectorAll('.aboutme-slide-next');
// nextSlideBtnAll.forEach(nextSlideBtn => {
//   nextSlideBtn.addEventListener('click', e => {
//     aboutmeSwiper.slideNext();
//   });
// });
