// import { initSwiper } from './swiper';

// const rewiewsInitSwiper = initSwiper('.rewiews-list-wrapper', {
//   direction: 'horizontal',
//   slidesPerView: 1,
//   spaceBetween: 0,
//   breakpoints: {
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 0,
//     },
//     1440: {
//       slidesPerView: 4,
//       spaceBetween: 0,
//     },
//   },
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
//   navigation: {
//     nextEl: '.rewiews-button-next',
//     prevEl: '.rewiews-button-prev',
//   },
// });

import { initSwiper } from './swiper';

const projectsInitSwiper = initSwiper('.rewiews-list-wrapper', {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    nextEl: '.rewiews-button-next',
    prevEl: '.rewiews-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});
