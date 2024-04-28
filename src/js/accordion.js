import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// const icon = document.querySelector('.ac-btn-icon');

function createAccordion({
  containerClass,
  elementClass,
  triggerClass,
  panelClass,
  openOnInit = [],
  duration = 600,
}) {
  return new Accordion(containerClass, {
    elementClass,
    triggerClass,
    panelClass,
    showMultiple: true,
    openOnInit: openOnInit,
    duration: duration,
    beforeOpen: icon => {
      const useElement = icon.querySelector('use');
      useElement.setAttribute('href', '../img/icons.svg#icon-arrow-up');
    },
    beforeClose: icon => {
      const useElement = icon.querySelector('use');
      useElement.setAttribute('href', '../img/icons.svg#icon-arrow-down');
    },
  });
}

export { createAccordion };
