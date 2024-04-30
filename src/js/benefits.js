import {
  benefitsClose,
  benefitsIcon,
  benefitsList,
} from './refs';

const getElement = (path, dom = document) => {
  return dom.querySelector(path);
};

const domElement = getElement('.benefits-section');
const modal = getElement('.benefits-modal', domElement);
const modalContent = getElement('.modal--benefits', domElement);

function toggleModal() {
  domElement.classList.toggle('visibleModal');
}

const cards = benefitsList.querySelectorAll('.benefits-item');

cards.forEach(card => {
  card.addEventListener('click', event => {
    toggleModal();
    const textLi = card.closest('li.benefits-item').innerHTML;
    modalContent.insertAdjacentHTML('beforeend', textLi);

    // Отримуємо текст з елемента <p class="benefits-text-more">
    const moreText = card
      .closest('li.benefits-item')
      .querySelector('.benefits-text-more').innerHTML;

    // Додаємо текст в кінець модального вікна
    modalContent.insertAdjacentHTML('beforeend', moreText);

    // Блокуємо прокрутку body
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
  });
});

function benefitsCloseModal(event) {
  if (
    event.target === modal ||
    event.target === benefitsClose ||
    event.target === benefitsIcon ||
    event.code === 'Escape'
  ) {
    toggleModal();
    modalContent.innerHTML = '';

    // Розблоковуємо прокрутку body
    document.body.style.overflow = '';
  }
}

modal.addEventListener('click', benefitsCloseModal);
document.addEventListener('keydown', event => {
  if (
    event.code === 'Escape' &&
    domElement.classList.contains('visibleModal')
  ) {
    benefitsCloseModal(event);
  }
});
