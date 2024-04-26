const menu = document.querySelector(".menu-title");
const menuList = document.querySelector(".menu-list");
const openBtn = document.querySelector(".open-mobile-menu");
const closeBtn = document.querySelector(".close-menu");
const mobMenu = document.querySelector(".mobile-menu");
const mobMenuList = document.querySelector(".mobile-menu-list");
const orderProject = document.querySelector(".order-project-mobm");

menu.addEventListener("click", handleClick);
menuList.addEventListener("click", handleClick);

function handleClick() {
    menuList.classList.toggle("hidden");
}

openBtn.addEventListener("click", openBtnClick)

function openBtnClick() {
    mobMenu.classList.add("is-open");
}

closeBtn.addEventListener("click", closeBtnClick);
mobMenuList.addEventListener("click", closeBtnClick);
orderProject.addEventListener("click", closeBtnClick);

function closeBtnClick() {
    mobMenu.classList.remove("is-open");
}