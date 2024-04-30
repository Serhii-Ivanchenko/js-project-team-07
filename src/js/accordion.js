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
  });
}

function handleClick(event, { btnClass, iconClass }) {
  const arrowBtn = event.target.closest(btnClass);
  if (!arrowBtn) return;

  const arrowIcon = arrowBtn.querySelector(iconClass);
  const isRotated = arrowBtn.classList.contains('rotated');

  if (isRotated) {
    arrowIcon.style.transform = 'rotate(0deg)';
    arrowBtn.classList.remove('rotated');
  } else {
    arrowIcon.style.transform = 'rotate(180deg)';
    arrowBtn.classList.add('rotated');
  }
}

export { createAccordion, handleClick };
