import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

function createAccordion({
  containerClass,
  elementClass,
  triggerClass,
  panelClass,
  openOnInit = [],
  duration = 400,
}) {
  return new Accordion(containerClass, {
    elementClass,
    triggerClass,
    panelClass,
    showMultiple: true,
    openOnInit: openOnInit,
    duration: duration,
    beforeOpen: currentElement => {
      const useElement = currentElement.querySelector('use');
      useElement.setAttribute('href', '../img/icons.svg#icon-arrow-up');
    },
    beforeClose: currentElement => {
      const useElement = currentElement.querySelector('use');
      useElement.setAttribute('href', '../img/icons.svg#icon-arrow-down');
    },
  });
}

export { createAccordion };
