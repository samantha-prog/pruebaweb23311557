const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;

    if (['+', '-', '*', '/'].includes(value)) {
      operator = value;
      previousInput = currentInput;
      currentInput = '';
    } else if (value === '.') {
      if (!currentInput.includes('.')) {
        currentInput += value;
      }
    } else {
      currentInput += value;
    }

    display.value = currentInput || previousInput;
  });
});

equals.addEventListener('click', () => {
  if (operator && currentInput && previousInput) {
    currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
    display.value = currentInput;
    operator = '';
    previousInput = '';
  }
});

clear.addEventListener('click', () => {
  currentInput = '';
  operator = '';
  previousInput = '';
  display.value = '';
});

