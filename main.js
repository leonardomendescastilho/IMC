const modal = document.querySelector('#modal');
const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const button = document.querySelector('#button');
const error = document.querySelector('.error');
const inputs = document.querySelectorAll('.input');
const inputSpan = document.querySelector('.span');

button.addEventListener('click', (event) => {
  event.preventDefault();
  // isInputNotANumber();
  calculateIMC()
  openModal()
});

function calculateIMC() {
  const weight = Number(weightInput.value)
  const height = Number(heightInput.value)
  // if (weight <= 0 || height <= 0) {
  //   return 'Peso e altura devem ser maiores que zero';
  // }
  let imc =  weight / ((height / 100) ** 2);
  document.querySelector('.span').innerHTML = imc.toFixed(2);
}

function openModal() {
  modal.classList.add('open');
}

function isInputNotANumber() {
  if (isNaN(Number(weight.value)) || isNaN(Number(height.value))) {
    return error.classList.add('open');
  }
}
