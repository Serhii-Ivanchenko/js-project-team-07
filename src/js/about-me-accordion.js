import { createAccordion, handleAccordionClick } from './accordion';
import { aboutmeAccordion } from './refs';

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

const aboutmeAccordionTriggers = aboutmeAccordion.querySelectorAll(
  '.aboutme-accordion-trigger'
);

aboutmeAccordionTriggers.forEach(accordionTrigger => {
  accordionTrigger.addEventListener('click', event => {
    handleAccordionClick(event, clickOptions);
  });
});

createAccordion(options);
