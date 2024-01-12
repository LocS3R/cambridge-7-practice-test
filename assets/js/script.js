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

//!handle Submit

const btnSubmit = document.getElementById("submit");

const processListeningS1 = () => {
  const allForm = document.querySelectorAll("form");
  allForm.forEach((form) => {
    processAllForm(form);
  });
};

const processAllForm = (form) => {
  const correctAnswers = {
    formls11: {
      ls11: ["one", "mot"],
      ls12: ["two", "2"],
      ls13: ["three"],
      ls14: ["four", "4"],
      ls15: ["five", "nam", "5"],
    },
    formls12: {
      ls11: ["mot"],
      ls12: ["2", "two"],
      ls13: ["three"],
      ls14: ["four", "4"],
      ls15: ["five", "5"],
    },
    formls21: {},
    formls22: {},
    formls31: {},
    formls32: {},
    formls33: {},
    formls41: {},
    formls42: {},
  };
  console.log(form);
  const userAnswers = {};
  console.log("user leanth" + Object.keys(userAnswers).length);
  const questions = form.querySelectorAll(".question");
  const getId = form.dataset.formId;
  console.log(questions);
  console.log(getId[getId.length - 2]);
  questions.forEach((question, index) => {
    const texts = question.querySelectorAll('input[type="text"]');
    console.log(texts);
    // const selectedValues = Array.from(texts).map((textbox) => {
    //   textbox.value;
    //   console.log("text vaua: " + textbox.value);
    // });
    const selectedValues = Array.from(texts).forEach((textbox) => {
      console.log(`userAnswers['ls${getId[getId.length - 2]}${
        Object.keys(userAnswers).length + 1
      }'] =
        ${textbox.value};
`);
      userAnswers[
        `ls${getId[getId.length - 2]}${Object.keys(userAnswers).length + 1}`
      ] = textbox.value;
      const questionElement = textbox;

      // Reset background color before processing current question
      questionElement.style.backgroundColor = "";

      const isCorrect = correctAnswers[form.dataset.formId][
        `ls${getId[getId.length - 2]}${Object.keys(userAnswers).length}`
      ].some((correctValue) => textbox.value === correctValue);
      console.log();
      console.log(
        "Here" +
          correctAnswers[form.dataset.formId][
            `ls${getId[getId.length - 2]}${Object.keys(userAnswers).length}`
          ],
      );

      const t = JSON.stringify(
        correctAnswers[form.dataset.formId][
          `ls${getId[getId.length - 2]}${Object.keys(userAnswers).length}`
        ],
      );
      console.log(`${JSON.stringify(textbox.value)} ===
        ${t}`);

      if (isCorrect) {
        // Change color to green for correct answers
        questionElement.style.backgroundColor = "#9effa8"; // Light green
      } else {
        // Change color to red for incorrect answers
        questionElement.style.backgroundColor = "#ffa8a8"; // Light red
      }
    });
    // userAnswers[`ls${getId[getId.length - 2]}${index + 1}`] = selectedValues;
    console.log(userAnswers);

    console.log(
      selectedValues + ": " + `ls${getId[getId.length - 2]}${index + 1}`,
    );

    // Get the corresponding question element for styling
  });

  // Compare user's answers with correct answers
  let score = 0;
  for (const questionNumber in userAnswers) {
    const isCorrect =
      Array.isArray(userAnswers[questionNumber]) &&
      userAnswers[questionNumber].some((value) =>
        correctAnswers[form.dataset.formId][questionNumber].includes(value),
      );
    console.log("qtnumber: " + questionNumber);
    console.log(
      `userAnswer: ${userAnswers[questionNumber]}, ${
        correctAnswers[form.dataset.formId][questionNumber]
      }`,
    );
    if (isCorrect) {
      score++;
    }
  }

  // Display the results or perform any other actions based on the score
  console.log(`Form ${form.dataset.formId} - Your score: ${score} out of 20`);
};
const calculatePoint = () => {
  processListeningS1();
};
btnSubmit.onclick = () => {
  // alert("hello");
  calculatePoint();
};
