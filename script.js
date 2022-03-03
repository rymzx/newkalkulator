// const inputone = ducument.getElemntById('inputOne');
// const inputone = ducument.getElemntById('inputTwo');
// const inputone = ducument.getElemntById('addButton');
// const inputone = ducument.getElemntById('result');

// addButton.addEventListener('click', () => {
//   const inputOneValue = inputOne.value;
//   const inputTwoValue = inputTwo.value;
//   const addedResult = parseInt(inputOneValue) + parseInt(inputTwoValue);
//   result.innerHTML = addedResult;
// });

const inputOne = document.getElementById('inputOne');
const inputTwo = document.getElementById('inputTwo');
const addButton = document.getElementById('addButton');
const result = document.getElementById('result');

addButton.addEventListener('click', () => {
  const inputOneValue = inputOne.value;
  const inputTwoValue = inputTwo.value;
  const addedResult = parseInt(inputOneValue) + parseInt(inputTwoValue);
  result.innerHTML = addedResult;
});
