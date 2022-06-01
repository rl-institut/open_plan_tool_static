////////////////////////////////////////////// Animations on scroll
AOS.init({
  duration: 1000,
  disable: "mobile"
});

////////////////////////////////////////////// Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

////////////////////////////////////////////// My projects page
const projectWrap = document.querySelector('main');

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

////////////////////////////////////////////// Show up system design error modal
// replace window.onload with other event
const systemDesignError = document.getElementById("js-system-design-error");

if (systemDesignError) {
  let designError = new bootstrap.Modal(systemDesignError, {});
  window.onload = function () {
    designError.show();
  };
}

////////////////////////////////////////////// Dummy highlight animation after duplicating scenario in project view
const testDuplicateScenario = document.getElementById("testDuplicateScenario");
const testDuplicatedScenario = document.getElementById("testDuplicatedScenario");

function testEndDuplicatedHighlight() {
  testDuplicatedScenario.style.backgroundColor = "#FFF";
  setTimeout(() => {
    testDuplicatedScenario.classList.remove("scenario-duplicated");
  }, 1000);
};

/*
testDuplicateScenario.addEventListener("click", () => {
  testDuplicatedScenario.classList.add("scenario-duplicated");
  testDuplicatedScenario.style.backgroundColor = "#E3EAEE";
  testDuplicatedScenario.addEventListener("click", () => testEndDuplicatedHighlight());
  setTimeout(() => testEndDuplicatedHighlight(), 6000);
});
*/

////////////////////////////////////////////// Design saved animation
console.log('test');
const saveDesignBtn = document.getElementById('js-saveDesign');
const designSavedFeedback = document.getElementById('js-designSaved');

saveDesignBtn.addEventListener('click', function() {
  saveDesignBtn.classList.add('hidden');
  designSavedFeedback.classList.add('display');
});