// JavaScript code to make the calculator work
const inputBox = document.getElementById('inputBox');
let currentOperation = '';
let previousOperation = '';

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const buttonText = e.target.textContent;
      if (buttonText === 'AC') {
        inputBox.value = '';
        currentOperation = '';
        previousOperation = '';
      } else if (buttonText === 'DEL') {
        inputBox.value = inputBox.value.slice(0, -1);
      } else if (buttonText === '=') {
        try {
          const expression = currentOperation.replace('÷', '/');
          const result = eval(expression);
          inputBox.value = result;
          previousOperation = currentOperation;
          currentOperation = '';
        } catch (error) {
          inputBox.value = 'Error';
        }
      } else {
        if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '÷') {
          currentOperation += buttonText;
          inputBox.value += buttonText;
        } else {
          currentOperation += buttonText;
          inputBox.value += buttonText;
        }
      }
    });
  });
});