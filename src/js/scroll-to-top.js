import { scrollToTopBtn } from "./refs";

scrollToTopBtn.addEventListener('click', onScrollToTopBtnClick);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopBtn.style.display = 'flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
}

function onScrollToTopBtnClick() {
  window.scrollTo({
    top: 0,
  });
}
