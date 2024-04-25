// User options
new Accordion('.container-second', {
  duration: 400,
  showMultiple: true,
  onOpen: function (currentElement) {
    console.log(currentElement);
  },
});

// // Default options
// new Accordion('.accordion-container');

// new Accordion('.container-first');

// // User options
// new Accordion('.container-second', {
//   duration: 400,
//   showMultiple: true,
//   onOpen: function (currentElement) {
//     console.log(currentElement);
//   },
// });

// // Define several accordions with the same options (pass an array with selectors)
// new Accordion(['.container-first', '.container-second'], {});

// // or pass an array with HTMLElements
// const accordions = Array.from(
//   document.querySelectorAll('.accordion-container')
// );
// new Accordion(accordions, {});

// // Detach events
// const accordion = new Accordion('.container-first');
// accordion.detachEvents();
