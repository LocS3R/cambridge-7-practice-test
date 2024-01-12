// handle active section when click
const chooseSection = document.querySelector(".choose-section");
var currentSection = 1;
// Add a click event listener to the container
chooseSection.addEventListener("click", function (event) {
  // Check if the clicked element is a section
  if (
    event.target.classList.contains("section1") ||
    event.target.classList.contains("section2") ||
    event.target.classList.contains("section3") ||
    event.target.classList.contains("section4")
  ) {
    // Remove the 'active' class from all sections
    chooseSection.querySelectorAll("div").forEach((section) => {
      section.classList.remove("active");
    });

    // Add the 'active' class to the clicked section
    // console.log(event.target.classList.value);
    let chooseS = event.target.classList.value;
    // console.log(chooseS[chooseS.length - 1]);
    changeToSection(chooseS[chooseS.length - 1]);
    event.target.classList.add("active");
  }
});

function changeToSection(section) {
  console.log(section);
  const contentSection = document.querySelector(".content-section");
  contentSection.querySelectorAll(".content-section > div").forEach((child) => {
    let sr = child.classList.value;
    if (sr.includes(section)) {
      child.classList.remove("hiden");
      console.log(child.classList);
    } else {
      child.classList.add("hiden");
      console.log(child.classList);
    }
    // console.log(sr[sr.length - 1]);
  });
}
