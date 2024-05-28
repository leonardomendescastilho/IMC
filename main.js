const modal = document.querySelector('#modal');
const span = document.querySelector('.span');
const inputs = document.querySelectorAll('.input');
const error = document.querySelector('.error');
const closeIcon = document.querySelector('#close-icon')

const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const button = document.querySelector('#button');

function isValidPositiveNumber(value) {
  const number = Number(value);
  const validation = number > 0 && !Number.isNaN(number);
  return validation;
}

function startingCalculate(event) {
  event.preventDefault();

  const validWeight = isValidPositiveNumber(weight.value);
  const validHeight = isValidPositiveNumber(height.value);

  if (validWeight && validHeight) {
    const result = calculateIMC(weight.value, height.value);
    addValueToModal(result);
    openModal();
  } else {
    modalError();
  }
}
function calculateIMC(weight, height) {
  const imc = (weight / (height / 100) ** 2).toFixed(2);
  return imc;
}

function addValueToModal(result) {
  span.innerText = result;
}

function openModal() {
  modal.classList.add('open');

  const modalIsOpen = modal.classList.contains('open')
  if(modalIsOpen){
    closeIcon.addEventListener('click', closeModal);
    modal.addEventListener('click', closeModal);
  }
}
function closeModal(){
  modal.classList.remove('open');
  weight.value = '';
  height.value = '';
  
}
let isOpen = false;
function modalError() {
  error.classList.add('open');
  isOpen = true;
  if (isOpen) {
    inputs.forEach((input) => {
      input.addEventListener('click', () => {
          weight.value = '';
          height.value = '';
          error.classList.remove('open');
          isOpen = false;
      });
    });
  }
}

button.addEventListener('click', startingCalculate);
