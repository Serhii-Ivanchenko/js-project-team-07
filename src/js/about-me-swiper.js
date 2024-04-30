import { initSwiper } from './swiper';
import { nextSlideBtn } from './refs';

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
});

nextSlideBtn.addEventListener('click', e => {
  aboutmeSwiper.slideNext();
});
