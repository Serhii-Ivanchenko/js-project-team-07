const menuBox = document.querySelector(".menu")
const menu = document.querySelector(".menu-title");
const menuList = document.querySelector(".menu-list");
const openBtn = document.querySelector(".open-mobile-menu");
const mobMenu = document.querySelector(".mobile-menu");


menuBox.addEventListener("click", handleClick);
function handleClick(event) {
    if (event.target.nodeName === "DIV") {
        return;
    } else {
        menuList.classList.toggle("hidden");
    }
}

openBtn.addEventListener("click", openBtnClick)
function openBtnClick() {
     mobMenu.classList.add("is-open");
}


mobMenu.addEventListener("click", closeBtnClick);
function closeBtnClick( event) {
    if (event.target.nodeName === "DIV") {
        return;
    } else{
        mobMenu.classList.remove("is-open");
    }
}




// const nav = document.querySelector(".header-nav")
// const menuListItem = document.querySelector(".menu-list-item")

// nav.addEventListener("click", handleClick);

// function handleClick(event) {
//     if (event.target === openBtn) {
//         console.log("click");
//         mobMenu.classList.add("is-open");
//     } else if (event.target === menu) {
//         console.log("click");
//         menuList.classList.toggle("hidden");
//     } else {
//         return;
//     }
// }