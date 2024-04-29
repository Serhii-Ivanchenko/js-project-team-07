import { createAccordion } from './accordion';
const options = {
  containerClass: '.accordion-container',
  elementClass: 'aboutme-item',
  triggerClass: 'aboutme-ac-trigger',
  panelClass: 'aboutme-item-panel',
  openOnInit: [0],
  duration: 400,
};
createAccordion(options);
