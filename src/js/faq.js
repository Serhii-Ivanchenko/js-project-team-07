import { createAccordion, handleClick } from './accordion';

const accordionList = document.querySelector('.faq-items');

const options = {
  containerClass: '.faq-items',
  elementClass: 'faq-item',
  triggerClass: 'faq-acordeon-btn',
  panelClass: 'faq-descr',
};

const clickOptions = {
  btnClass: '.faq-acordeon-btn',
  iconClass: '.modal-btn-icon',
};


accordionList.addEventListener('click', event =>
  handleClick(event, clickOptions)
);

createAccordion(options);
