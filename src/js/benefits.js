const benefitsList = document.querySelector('.benefits-list');
const benefitsClose = document.querySelector('.close-benefits-btn');
const benefitsIcon = document.querySelector('.close-benefits-icon');

const getElement = (path, dom = document) => {
  return dom.querySelector(path);
};

const domElement = getElement('.benefits-section');
const modal = getElement('.benefits-modal', domElement);
const modalContant = getElement('.modal--benefits', domElement);

function toggleModal() {
  domElement.classList.toggle('visibleModal');
}

benefitsList.addEventListener('click', ({ target }) => {
  console.log('qaz');
  const textLi = target.closest('li.benefits-item').innerHTML;
  toggleModal();

  modalContant.insertAdjacentHTML('beforeend', textLi);
  //   modal.addEventListener('click', ({ target, currentTarget }) => {
  //     if (target === currentTarget) toggleModal();
  //   });
});

function benefitsCloseModal(event) {
  console.log(event.target);
  if (
    event.target === modal ||
    event.target === benefitsClose ||
    event.target === benefitsIcon
  ) {
    toggleModal();
    modalContant.innerHTML = '';
  }
}

modal.addEventListener('click', benefitsCloseModal);
