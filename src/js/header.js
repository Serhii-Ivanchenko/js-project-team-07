const menuBox = document.querySelector('.menu');
const menu = document.querySelector('.menu-title');
const menuList = document.querySelector('.menu-list');
const openBtn = document.querySelector('.open-mobile-menu');
const mobMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.header-nav');
const menuListItem = document.querySelector('.menu-list-item');

mobMenu.addEventListener('click', closeBtnClick);
nav.addEventListener('click', onNavElementsClick);

// menuBox.addEventListener("click", handleClick);
// function handleClick(event) {
//     if (event.target.nodeName === "DIV") {
//         return;
//     } else {
//         menuList.classList.toggle("hidden");
//     }
// }

// openBtn.addEventListener("click", openBtnClick)
// function openBtnClick() {
//     console.log('this is', event.target);
//      mobMenu.classList.add("is-open");
// }

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
