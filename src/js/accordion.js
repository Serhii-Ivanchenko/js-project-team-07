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
  // console.log('handleAccordionClick:--------------');
  // console.log('e.t', event.target);
  // console.log('e.c', event.currentTarget);
  const arrowBtn = event.currentTarget.querySelector(btnClass);
  // console.log('arrowBtn', arrowBtn);
  if (!arrowBtn) return;

  const arrowIcon = event.currentTarget.querySelector(iconClass); //||&&arrowBtn.querySelector(iconClass);
  const isRotated = arrowBtn.classList.contains('rotated');
  // console.log('arrowIcon', arrowIcon);
  // console.log('isRotated', isRotated);
  if (isRotated) {
    arrowIcon.style.transform = 'rotate(0deg)';
    arrowBtn.classList.remove('rotated');
  } else {
    arrowIcon.style.transform = 'rotate(180deg)';
    arrowBtn.classList.add('rotated');
  }
  // console.log('------------------------------------');
}

function handleClick(event, { btnClass, iconClass }) {
  // console.log('handleClick:-----------------');
  // console.log('e.t', event.target);
  // console.log('e.c', event.currentTarget);
  const arrowBtn = event.target.closest(btnClass);
  // console.log('arrowBtn', arrowBtn);
  if (!arrowBtn) return;

  const arrowIcon = arrowBtn.querySelector(iconClass);
  const isRotated = arrowBtn.classList.contains('rotated');
  // console.log('arrowIcon', arrowIcon);
  // console.log('isRotated', isRotated);

  if (isRotated) {
    arrowIcon.style.transform = 'rotate(0deg)';
    arrowBtn.classList.remove('rotated');
  } else {
    arrowIcon.style.transform = 'rotate(180deg)';
    arrowBtn.classList.add('rotated');
  }
  // console.log('------------------------------------');
}

export { createAccordion, handleAccordionClick, handleClick };
