import { createAccordion, handleClick } from './accordion';
import { accordionList } from "./refs";

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
