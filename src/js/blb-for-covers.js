import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const coversGallery = document.querySelector('.marquee');

coversGallery.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }

  const instance = basicLightbox.create(
    `<img class="modal-img" srcset="${event.target.srcset}">`,
    {
      onShow: instance => {
        window.addEventListener('keydown', onEscPress);
      },
      onClose: instance => {
        window.removeEventListener('keydown', onEscPress);
      },
    }
  );

  instance.show();

  function onEscPress(event) {
    if (event.code === 'Escape') {
      console.log(event);
      instance.close();
    }
  }
}
