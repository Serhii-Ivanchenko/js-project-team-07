import { createAccordion, handleClick } from './accordion';
import { accordionListFaq } from './refs';

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


accordionListFaq.addEventListener('click', event =>
  handleClick(event, clickOptions)
);

createAccordion(options);
