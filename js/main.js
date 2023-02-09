// Definition of DOM's
const usernameDOM = document.querySelector("#username");
const emailDOM = document.querySelector("#email");
const passwordDOM = document.querySelector("#password");
const password2DOM = document.querySelector("#password2");

// Function that show error
function showError(input, message = "this is required") {
  let formInput = input.parentElement;
  formInput.className = "formInput error mb-3";
  let span = formInput.querySelector("span");
  span.innerText = message;
}

// Function that show success
function showSuccess(input) {
  let formInput = input.parentElement;
  formInput.className = "formInput success mb-3";
}

// Function that check required inputs
function checkRequired(allInputs) {
  allInputs.forEach(function (input) {
    if (input.value == "") {
      showError(input);
      let formInput = input.parentElement;
      let span = formInput.querySelector("span");
      span.innerText = ` ${input.id} is required `;
    }
  });
}

// Function that check input max and min lenght
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.id} must be min ${min} char`);
  } else if (input.value.length > max) {
    showError(input, `${input.id} must be max ${max} char`);
  } else {
    showSuccess(input);
  }
}

// Function that check email with regex
function checkEmail(input) {
  let re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Function that check password confirm
function checkPassword(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Password do not match");
  } else if (input2.value == "") {
    showError(input2, "Please confirm your password");
  } else {
    showSuccess(input2);
  }
}

// Submit event listener
document.addEventListener("submit", function (e) {
  e.preventDefault();

  // Function calls
  checkRequired([usernameDOM, emailDOM, passwordDOM, password2DOM]);
  checkLength(usernameDOM, 3, 15);
  checkLength(passwordDOM, 5, 15);
  checkEmail(emailDOM);
  checkPassword(passwordDOM, password2DOM);
});
