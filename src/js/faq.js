import { createAccordion, handleAccordionClick } from './accordion';
import { faqAccordion } from './refs';

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

const faqAccordionTriggers = faqAccordion.querySelectorAll('.faq-acordeon-btn');
faqAccordionTriggers.forEach(accordionTrigger => {
  accordionTrigger.addEventListener('click', event => {
    handleAccordionClick(event, clickOptions);
  });
});

createAccordion(options);
