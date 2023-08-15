// GLOBAL VARIABLES
const form = document.querySelector(".entire-form-button-wrapper");

//REAL TIME FRONT AND BACK CARD UPDATE FUNCTION
function updateCardElements(inputElement, cardElements) {
  inputElement.onkeyup = function () {
    const inputValue = inputElement.value;

    for (let i = 0; i < cardElements.length; i++) {
      cardElements[i].innerHTML = inputValue;
    }
  };
}
//FUNCTION TAKES IN ALL OF THESE
const nameInput = document.getElementById("name-input");
const nameOnCard = document.querySelectorAll(".card-name");
updateCardElements(nameInput, nameOnCard);

const numberInput = document.getElementById("number-input");
const numberOnCard = document.querySelectorAll(".card-number");
updateCardElements(numberInput, numberOnCard);

const monthInput = document.getElementById("month-input");
const monthOnCard = document.querySelectorAll(".expiration-month");
updateCardElements(monthInput, monthOnCard);

const yearInput = document.getElementById("year-input");
const yearOnCard = document.querySelectorAll(".expiration-year");
updateCardElements(yearInput, yearOnCard);

const cvcInput = document.getElementById("cvc-input");
const cvcOnCard = document.querySelectorAll(".cvc");
updateCardElements(cvcInput, cvcOnCard);

// FORM VALIDATION FOR CARDHOLDER NAME

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nameValue = nameInput.value;
  let nameError = document.querySelector(".name-error");
  if (validateName(nameValue)) {
    nameError.style.display = "none";
    nameInput.style.border = "1px solid var(--lightGray)";
  } else {
    nameError.style.display = "flex";
    nameInput.style.border = "1px solid var(--inputErrors)";
  }
  let nameBlankError = document.querySelector(".name-blank-error");
  if (validateInput(nameValue)) {
    nameBlankError.style.display = "none";
  } else {
    nameBlankError.style.display = "flex";
    nameError.style.display = "none";
  }
});

function validateName(name) {
  var regName = /^[a-zA-Z\s]+$/;
  return regName.test(name);
}

// FORM VALIDATION FOR CARDHOLDER NUMBER

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let numberValue = numberInput.value;
  let numberError = document.querySelector(".number-error");
  if (validateNumber(numberValue)) {
    numberError.style.display = "none";
    numberInput.style.border = "1px solid var(--lightGray)";
  } else {
    numberError.style.display = "flex";
    numberInput.style.border = "1px solid var(--inputErrors)";
  }

  let numberBlankError = document.querySelector(".number-blank-error");
  if (validateInput(numberValue)) {
    numberBlankError.style.display = "none";
    numberInput.style.border = "1px solid var(--lightGray)";
  } else {
    numberBlankError.style.display = "flex";
    numberError.style.display = "none";
    numberInput.style.border = "1px solid var(--inputErrors)";
  }

  const number16Max = document.querySelector(".number-16-error");

  const numberLength = numberValue.length;
  if (numberLength < 19) {
    number16Max.style.display = "flex";
    numberInput.style.border = "1px solid var(--inputErrors)";
  } else {
    number16Max.style.display = "none";
    numberInput.style.border = "1px solid var(--lightGray)";
  }
});

function validateNumber(number) {
  var regNumber = /^[0-9\s]+$/;
  return regNumber.test(number);
}

// INPUT SKIPS EVERY 4 CHARACTERS FOR CARDHOLDER NUMBER
numberInput.addEventListener("input", (event) => {
  const inputValue = event.target.value.replace(/\s/g, ""); //Removes Existing spaces
  const formattedValue = formatInputValue(inputValue);
  event.target.value = formattedValue;
});

function formatInputValue(inputValue) {
  const maxLength = 19;
  let formattedValue = "";

  for (let i = 0; i < inputValue.length; i++) {
    if (i > 0 && i % 4 === 0 && i !== maxLength) {
      formattedValue += " ";
    }
    formattedValue += inputValue[i];
  }
  return formattedValue;
}

// FORM VALIDATION FOR EXP. DATE
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let monthInputValue = monthInput.value;
  let monthInputError = document.querySelector(".exp-blank-error");
  if (validateInput(monthInputValue)) {
    monthInputError.style.display = "none";
    monthInput.style.border = "1px solid var(--lightGray)";
  } else {
    monthInputError.style.display = "flex";
    monthInput.style.border = "1px solid var(--inputErrors)";
  }

  const number2Max = document.querySelector(".number-2-error");
  const expDateValue = monthInput.value.length;

  if (expDateValue < 2) {
    number2Max.style.display = "flex";
    monthInput.style.border = "1px solid var(--inputErrors)";
  } else {
    number2Max.style.display = "none";
    monthInput.style.border = "1px solid var(--lightGray)";
  }
});

monthInput.addEventListener("input", () => {
  if (monthInput.value.length > 2) {
    monthInput.value = monthInput.value.slice(0, 2);
  }
});

//FORM VALIDATION FOR YY
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let yearInputValue = yearInput.value;
  let yearInputError = document.querySelector(".yy-blank-error");
  if (validateInput(yearInputValue)) {
    yearInputError.style.display = "none";
    yearInput.style.border = "1px solid var(--lightGray)";
  } else {
    yearInputError.style.display = "flex";
    yearInput.style.border = "1px solid var(--inputErrors)";
  }

  const number2MaxYY = document.querySelector(".number-2-error-yy");
  const mmYYValue = yearInput.value.length;

  if (mmYYValue < 2) {
    number2MaxYY.style.display = "flex";
    yearInput.style.border = "1px solid var(--inputErrors)";
  } else {
    number2MaxYY.style.display = "none";
    yearInput.style.border = "1px solid var(--lightGray)";
  }
});

yearInput.addEventListener("input", () => {
  if (yearInput.value.length > 2) {
    yearInput.value = yearInput.value.slice(0, 2);
  }
});

//FORM VALIDATION FOR CVC
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let cvcInputValue = cvcInput.value;
  let cvcInputError = document.querySelector(".cvc-blank-error");
  if (validateInput(cvcInputValue)) {
    cvcInputError.style.display = "none";
    cvcInput.style.border = "1px solid var(--lightGray)";
  } else {
    cvcInputError.style.display = "flex";
    cvcInput.style.border = "1px solid var(--inputErrors)";
  }

  const number3Max = document.querySelector(".number-3-error");
  const cvcLengthValue = cvcInput.value.length;

  if (cvcLengthValue < 3) {
    number3Max.style.display = "flex";
    cvcInput.style.border = "1px solid var(--inputErrors)";
  } else {
    number3Max.style.display = "none";
    cvcInput.style.border = "1px solid var(--lightGray)";
  }
});

cvcInput.addEventListener("input", () => {
  if (cvcInput.value.length > 3) {
    cvcInput.value = cvcInput.value.slice(0, 3);
  }
});

//CHECK FOR BLANKS FUNCTION
function validateInput(input) {
  return input.trim() !== "";
}

const frontCard = document.querySelector(".front-card");

//TOGGLE BETWEEN FORM AND COMPLETED STATE
const thankYouPage = document.querySelector(".entire-completed-state");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let nameValue = nameInput.value;
  let numberValue = numberInput.value;
  let monthInputValue = monthInput.value;
  let yearInputValue = yearInput.value;
  let cvcInputValue = cvcInput.value;
  const numberLength = numberValue.length;
  const expDateValue = monthInput.value.length;
  const mmYYValue = yearInput.value.length;
  const cvcLengthValue = cvcInput.value.length;

  if (
    validateName(nameValue) &&
    validateInput(nameValue) &&
    validateNumber(numberValue) &&
    validateInput(monthInputValue) &&
    validateInput(yearInputValue) &&
    validateInput(cvcInputValue) &&
    numberLength === 19 &&
    expDateValue === 2 &&
    mmYYValue === 2 &&
    cvcLengthValue === 3
  ) {
    form.style.visibility = "hidden";
    thankYouPage.style.display = "flex";
    thankYouPage.style.visibility = "visible";
  }
});

const thankYouPageButton = document.querySelector(".continue-button");

thankYouPageButton.addEventListener("click", () => {
  location.reload();
});

// REMEMBER TO ADD GRADIENT BORDER RADIUS WHEN YOURE TYPING IN THE INPUT FIELDS
// ALSO FIX CARD NUMBER INPUT, RED BORDER DOESNT SHOW UP IF INPUT 3333 3333 3333 333f
//ALSO SOMEHOW MOVE THE FRONT CARD IN DESKTOP VIEW TO THE RIGHT.
