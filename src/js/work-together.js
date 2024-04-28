import { postData } from "./swagger-api";

const footerEmailInput = document.querySelector('.footer-input-email');
const footerInputErrorMsg = document.querySelector('.input-error-message');
const form = document.querySelector('.footer-form');
const footerBackdrop = document.querySelector(".footer-backdrop");
const modalWindowHeader = document.querySelector(".modal-window-header");
const modalWindowText = document.querySelector(".modal-window-text");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalCloseBtnImg = document.querySelector(".modal-close-btn-img")

footerEmailInput.addEventListener('input', onFooterEmailInput);
form.addEventListener('input', onFormInput);
form.addEventListener("submit", onFormSubmit);
footerBackdrop.addEventListener("click", opBackdropClick);
modalCloseBtn.addEventListener("click", onModalCloseBtnClick)

const formNewState = JSON.parse(localStorage.getItem('savedUserInput'));

if (formNewState) {
  form.elements.email.value = formNewState.email;
  form.elements.comments.value = formNewState.comment;
}

function onFooterEmailInput() {
  if (footerEmailInput.validity.patternMismatch && footerEmailInput.value.trim().length > 0) {
    footerEmailInput.style.borderBottomColor = '#E74A3B';
    footerInputErrorMsg.style.color = '#E74A3B';
    footerInputErrorMsg.textContent = 'Invalid email, try again';
  } else {
    footerEmailInput.style.borderBottomColor = '#3CBC81';
    footerInputErrorMsg.style.color = '#3CBC81';
    footerInputErrorMsg.textContent = 'Succes!';
  }
}

function onFormInput(evt) {
  const userEmail = evt.currentTarget.elements.email.value.trim();
  const userComments = evt.currentTarget.elements.comments.value.trim();

  const userInput = {
    email: userEmail,
    comment: userComments,
  };

  localStorage.setItem('savedUserInput', JSON.stringify(userInput));
}

async function onFormSubmit(evt) {
    evt.preventDefault();

    try {
      const response = await postData(formNewState);
      openBackdrop();
      modalWindowHeader.textContent = response.title;
      modalWindowText.textContent = response.message;
      form.reset();
      localStorage.removeItem('savedUserInput');
    } catch (error) {
      openBackdrop();
      modalWindowHeader.textContent = error.code;
      modalWindowText.textContent = "Please, try again";
      modalWindowHeader.style.color = "#ed3b44";
      modalWindowText.style.color = "#ed3b44"; 
      modalCloseBtnImg.style.stroke = "#ed3b44"; 
  }
}

function openBackdrop() {
  window.addEventListener("keydown", onEscKeyPress);
      footerBackdrop.classList.add("backdrop-is-open");
}

function closeBackdrop() {
  window.removeEventListener("keydown", onEscKeyPress);
      footerBackdrop.classList.remove("backdrop-is-open");
}

function opBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeBackdrop();
  }
}

function onModalCloseBtnClick() {
  closeBackdrop();
}

function onEscKeyPress(evt) {
  if (evt.code === "Escape") {
    closeBackdrop();
  }
}

