// About-me Accordion
const aboutmeAccordion = document.querySelector('.aboutme-accordion-container');
// About-me Swiper
const nextSlideBtn = document.querySelector('.aboutme-slide-next');
// Benefits
const benefitsBody = document.querySelector('body');
const benefitsList = benefitsBody.querySelector('.benefits-list');
const benefitsClose = benefitsBody.querySelector('.close-benefits-btn');
const benefitsIcon = benefitsBody.querySelector('.close-benefits-icon');
// FAQ Accordion
const faqAccordion = document.querySelector('.faq-items');
// Header & Mobile menu
const menu = document.querySelector('.menu-title');
const menuList = document.querySelector('.menu-list');
const openBtn = document.querySelector('.open-mobile-menu');
const mobMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.header-nav');
// Reviews
const reviewsListEl = document.querySelector('.reviews-list');
const reviewsSection = document.querySelector('.reviews-section');
// Scroll-to-top
const scrollToTopBtn = document.querySelector('.scroll-up-btn');
// Work together (footer)
const footerEmailInput = document.querySelector('.footer-input-email');
const footerInputErrorMsg = document.querySelector('.input-error-message');
const form = document.querySelector('.footer-form');
const footerBackdrop = document.querySelector('.footer-backdrop');
const modalWindowHeader = document.querySelector('.modal-window-header');
const modalWindowText = document.querySelector('.modal-window-text');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalCloseBtnImg = document.querySelector('.modal-close-btn-img');

export {
  aboutmeAccordion,
  nextSlideBtn,
  benefitsBody,
  benefitsClose,
  benefitsIcon,
  benefitsList,
  faqAccordion,
  menu,
  menuList,
  openBtn,
  mobMenu,
  nav,
  reviewsListEl,
  reviewsSection,
  scrollToTopBtn,
  footerEmailInput,
  footerInputErrorMsg,
  form,
  footerBackdrop,
  modalWindowHeader,
  modalWindowText,
  modalCloseBtn,
  modalCloseBtnImg,
};
