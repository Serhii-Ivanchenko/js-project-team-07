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


import { getData } from "./swagger-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const reviewsListEl = document.querySelector('.reviews-list');
const reviewsSection = document.querySelector('.reviews-section');

let reviewsLoaded = false;

// Функція, яка перевірятиме видимість секції з відгуками
function checkReviewsVisibility(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            searchReviews();
            reviewsLoaded = true;
            observer.unobserve(reviewsSection);
        }
    });
}

// Створення спостерігача для секції з відгуками
const observer = new IntersectionObserver(checkReviewsVisibility, {
    root: null,
    threshold: 0.5
});

// Додаємо секцію з відгуками до спостерігача
observer.observe(reviewsSection);

async function searchReviews() {
    if (!reviewsLoaded) {
        try { 
            const response = await getData();
            if (response.length === 0) {
                reviewsListEl.innerHTML = createError();
            
                iziToast.error({
                    title: '',
                    message: "NOT FOUND",
                    position: 'bottomRight',
                    timeout: 3000,
                    pauseOnHover: false,
                });
            } else {
                reviewsListEl.insertAdjacentHTML('beforeend', createMarkup(response));
            }
        } catch (error) {
            reviewsListEl.innerHTML = createError();
            
            iziToast.error({
            title: '',
            message:
            error.message,
            position: 'bottomRight',
            timeout: 3000,
            pauseOnHover: false,
          });
        }  
    }
}


function createMarkup(arr) {
    return arr.map(({ _id, author, avatar_url, review }) =>
        `<li class="rewiews-list-element swiper-slide" data-id="${_id} ">
        <img
            class="rewiews-img"
            width="48px"
            src="${avatar_url}"
            alt="${author}"
          />
          <h3 class="rewiew-element-title">${author}</h3>
          <p class="rewiews-text">${review}</p>
        </li>`
    ).join('');
}

function createError() {
    return `<li class="reviews-error-item"><p class="reviews-error-text">NOT FOUND</p></li>`
}