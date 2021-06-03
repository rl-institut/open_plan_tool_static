////////////////////////////////////////////// Lazy loading images
var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});

////////////////////////////////////////////// Animations on scroll
AOS.init({
  duration: 1000,
  disable: "mobile"
});

////////////////////////////////////////////// My projects page
const projectWrap = document.querySelector('.projects');

// toggle HIDE/SHOW SCENARIOS text
projectWrap.addEventListener('click', function() {
  const collapsedScenariosBoxesExpanded = document.querySelectorAll('.btn.btn--action[aria-expanded="true"] .js-toggle-scenario-name');
  const collapsedScenariosBoxes = document.querySelectorAll('.btn.btn--action[aria-expanded="false"] .js-toggle-scenario-name');

  collapsedScenariosBoxesExpanded.forEach(function(item) {
    item.innerHTML = "Hide scenarios";
  });

  collapsedScenariosBoxes.forEach(function(item) {
    item.innerHTML = "Show scenarios";
  });
})