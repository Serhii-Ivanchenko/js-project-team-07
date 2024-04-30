import { initSwiper } from './swiper';
import { getData } from './swagger-api';
import { reviewsListEl, reviewsSection } from './refs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';


import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


let reviewsLoaded = false;

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
  threshold: 0.5,
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
          message: 'NOT FOUND',
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
        message: error.message,
        position: 'bottomRight',
        timeout: 3000,
        pauseOnHover: false,
      });
    }
  }
}

function createMarkup(arr) {
  return arr
    .map(
      ({ _id, author, avatar_url, review }) =>
        `<li class="rewiews-list-element swiper-slide" data-id="${_id} ">
        <img
            class="rewiews-img"
            width="48px"
            src="${avatar_url}"
            srcset="${avatar_url} 1x, ${avatar_url} 2x"
            alt="${author}"
            loading ="lazy"
          />
          <h3 class="rewiew-element-title">${author}</h3>
          <p class="rewiews-text">${review}</p>
        </li>`
    )
    .join('');
}

function createError() {
  return `<li class="reviews-error-item">
  <p class="reviews-error-text">NOT FOUND</p>
  </li>`;
}

// Функція модального вікна 

reviewsListEl.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();

  const reviewElement = event.target.closest('.rewiews-list-element');

  if (reviewElement) {
    const avatarUrl = reviewElement.querySelector('.rewiews-img').getAttribute('src');
    const author = reviewElement.querySelector('.rewiew-element-title').textContent;
    const review = reviewElement.querySelector('.rewiews-text').textContent;

    const instance = basicLightbox.create(
      `
      <div class="modal">
        <img
          class="rewiews-img"
          width="48px"
          src="${avatarUrl}"
          alt="${author}"
          loading="lazy"
        />
        <h3>${author}</h3>
        <p>${review}</p>
      </div>
      `,
      {
        onShow: instance => {
          window.addEventListener('keydown', onEscPress);
        },
        onClose: instance => {
          window.removeEventListener('keydown', onEscPress);
        },
      }
    );

    instance.show();

    function onEscPress(event) {
      if (event.code === 'Escape') {
        instance.close();
      }
    }
  }
}
