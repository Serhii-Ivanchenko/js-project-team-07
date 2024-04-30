import { createAccordion, handleClick } from './accordion';
import { accordionList } from './refs';

const options = {
  containerClass: '.aboutme-accordion-container',
  elementClass: 'aboutme-accordion-item',
  triggerClass: 'aboutme-accordion-trigger',
  panelClass: 'aboutme-accordion-panel',
  openOnInit: [0],
};

const clickOptions = {
  btnClass: '.aboutme-accordion-btn',
  iconClass: '.aboutme-item-icon',
};

accordionList.addEventListener('click', event =>
  handleClick(event, clickOptions)
);

createAccordion(options);
