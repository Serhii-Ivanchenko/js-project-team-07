import Accordion from 'accordion-js';
//import 'accordion-js/dist/accordion.css';
import '../css/accordion.css';

const accordions = Array.from(
  document.querySelectorAll('.accordion-container')
);
new Accordion(accordions, {
  duration: 400,
  openOnInit: [0],
  showMultiple: true,
  onOpen: function (currentElement) {
    let use = currentElement.querySelector('use[href]');
    use.setAttribute('href', '../img/icons.svg#icon-arrow-up');
  },
  onClose: function (currentElement) {
    let use = currentElement.querySelector('use[href]');
    use.setAttribute('href', '../img/icons.svg#icon-arrow-down');
  },
});
