import { createAccordion } from './accordion';
const arrowBtns = document.querySelectorAll('.faq-acordeon-btn');

const options = {
  containerClass: '.faq-items',
  elementClass: 'faq-item',
  triggerClass: 'faq-acordeon-btn',
  panelClass: 'faq-descr',
};

arrowBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const icon = btn.querySelector('.modal-btn-icon');
    const isRotated = btn.classList.contains('rotated');

    if (isRotated) {
      icon.style.transform = 'rotate(0deg)';
      btn.classList.remove('rotated');
    } else {
      icon.style.transform = 'rotate(180deg)';
      btn.classList.add('rotated');
    }
  });
});


createAccordion(options);