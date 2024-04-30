import { createAccordion, handleClick } from './accordion';

const accordionList = document.querySelector('.accordion-container');

const options = {
  containerClass: '.accordion-container',
  elementClass: 'aboutme-item',
  triggerClass: 'aboutme-ac-trigger',
  panelClass: 'aboutme-item-panel',
  openOnInit: [0],
};

const clickOptions = {
  btnClass: '.aboutme-accordion-btn',
  iconClass: '.aboutme-item-btn',
};

accordionList.addEventListener('click', event =>
  handleClick(event, clickOptions)
);

createAccordion(options);
