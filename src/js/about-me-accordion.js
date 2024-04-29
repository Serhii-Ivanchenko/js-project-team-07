// import Accordion from 'accordion-js';
//import 'accordion-js/dist/accordion.css';
// import '../css/accordion.css';

// const accordions = Array.from(
//   document.querySelectorAll('.accordion-container')
// );
// new Accordion(accordions, {
//   duration: 400,
//   openOnInit: [0],
//   showMultiple: true,
//   beforeOpen: function (currentElement) {
//     let use = currentElement.querySelector('use[href]');
//     use.setAttribute('href', '../img/icons.svg#icon-arrow-up');
//   },
//   beforeClose: function (currentElement) {
//     let use = currentElement.querySelector('use[href]');
//     use.setAttribute('href', '../img/icons.svg#icon-arrow-down');
//   },
// });

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
