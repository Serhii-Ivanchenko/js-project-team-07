import Accordion from 'accordion-js';

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

function handleAccordionClick(event, { btnClass, iconClass }) {
  const arrowBtn =
    event.currentTarget.querySelector(btnClass) ||
    event.target.closest(btnClass);
  const arrowIcon = event.currentTarget.querySelector(iconClass);
  if (!arrowBtn) return;

  const isRotated = arrowBtn.classList.contains('rotated');

  if (isRotated) {
    arrowIcon.style.transform = 'rotate(0deg)';
    arrowBtn.classList.remove('rotated');
  } else {
    arrowIcon.style.transform = 'rotate(180deg)';
    arrowBtn.classList.add('rotated');
  }
}

export { createAccordion, handleAccordionClick };
