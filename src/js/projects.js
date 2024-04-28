import { initSwiper } from './swiper';

const projectsInitSwiper = initSwiper('.projects-swiper-container', {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 280,
  navigation: {
    nextEl: '.projects-button-next',
    prevEl: '.projects-button-prev',
  },
});
// swiper.on('reachEnd', () => {
//   document
//     .querySelector('.swiper-button-next')
//     .classList.add('.swiper-button-disabled');
// });

// swiper.on('reachBeginning', () => {
//   document
//     .querySelector('.swiper-button-prev')
//     .classList.add('.swiper-button-disabled');
// });
