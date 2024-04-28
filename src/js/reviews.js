import { initSwiper } from './swiper';

const rewiewsInitSwiper = initSwiper('.rewiews-list-wrapper', {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  navigation: {
    nextEl: '.forward-button',
    prevEl: '.back-button',
  },
});

// swiper.on('reachEnd', () => {
//   document
//     .querySelector('.forward-button')
//     .classList.add('.rewiews-button-disabled');
// });

// swiper.on('reachBeginning', () => {
//   document
//     .querySelector('.back-button')
//     .classList.add('.rewiews-button-disabled');
// });