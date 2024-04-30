import {
  menu,
  menuList,
  openBtn,
  mobMenu,
  nav,
} from './refs';

mobMenu.addEventListener('click', closeBtnClick);
nav.addEventListener('click', onNavElementsClick);

function closeBtnClick(event) {
  if (event.target.nodeName === 'DIV') {
    return;
  } else {
    mobMenu.classList.remove('is-open');
  }
}

function onNavElementsClick(event) {
  if (event.target === menu) {
    menuList.classList.toggle('hidden');
  } else if (event.target === openBtn.firstElementChild) {
    mobMenu.classList.add('is-open');
  } else if (menuList.contains(event.target)) {
    menuList.classList.toggle('hidden');
  }
}
