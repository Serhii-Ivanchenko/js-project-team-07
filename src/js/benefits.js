const benefitsBody = document.querySelector('body');
const benefitsList = benefitsBody.querySelector('.benefits-list');
const benefitsClose = benefitsBody.querySelector('.close-benefits-btn');
const benefitsIcon = benefitsBody.querySelector('.close-benefits-icon');

const getElement = (path, dom = document) => {
  return dom.querySelector(path);
};

const domElement = getElement('.benefits-section');
const modal = getElement('.benefits-modal', domElement);
const modalContent = getElement('.modal--benefits', domElement);

function toggleModal() {
  domElement.classList.toggle('visibleModal');
}

benefitsList.addEventListener('click', ({ target }) => {
  const textLi = target.closest('li.benefits-item').innerHTML;
  toggleModal();
  modalContent.insertAdjacentHTML('beforeend', textLi);

  // Блокуємо прокручування body
  document.body.style.height = '100%';
  document.body.style.overflow = 'hidden';
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

    // Розблокуємо прокручування body
    document.body.style.overflow = '';
  }
}

modal.addEventListener('click', benefitsCloseModal);
document.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    benefitsCloseModal(event);
  }
});
