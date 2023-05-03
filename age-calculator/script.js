@@ -1,51 +1,31 @@
// Get the elements from the DOM
const birthdayInput = document.getElementById("birthday");
const calculateButton = document.getElementById("calculate");
const resultElement = document.getElementById("result");

// Add click event listener to the calculate button
calculateButton.addEventListener("click", calculateAge);

// Function to calculate the age
const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  // Get the value from the input
  const birthday = birthdayInput.value;

  // Check if the value is empty
  if (birthday === "") {
    // If the value is empty, show an alert
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    // If the value is not empty, calculate the age
    const age = getAge(birthday);

    // Show the result
    resultElement.innerHTML = `Your age is ${age} ${
      age > 1 ? "years" : "year" // Check if the age is more than 1
    } old`;
    const age = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

// Function to calculate the age
function getAge(birthDay) {
  // Get the current date
function getAge(birthdayValue) {
  const currentDate = new Date();

  // Get the birthday date
  const birthdayDate = new Date(birthDay);

  // Calculate the age
  const age = currentDate.getFullYear() - birthdayDate.getFullYear();

  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  // Return the age
  return age;
}

btnEl.addEventListener("click", calculateAge);