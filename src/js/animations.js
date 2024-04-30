document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.animated-element');

  const isInViewport = function (element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const handleScroll = function () {
    elements.forEach(function (element) {
      if (isInViewport(element) && !element.classList.contains('visible')) {
        element.classList.add('visible');
      }
    });
  };

  window.addEventListener('load', function () {
    handleScroll();
  });

  document.addEventListener('scroll', handleScroll);
});
