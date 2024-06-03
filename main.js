const modal = document.querySelector('#modal');
const span = document.querySelector('.span');
const inputs = document.querySelectorAll('.input');
const error = document.querySelector('.error');
const closeIcon = document.querySelector('#close-icon');

const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const button = document.querySelector('#button');

let isOpen = false;

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
    const result = action.calculateIMC(weight.value, height.value);
    action.addValueToModal(result);
    action.openModal();
  } else {
    action.modalError();
  }
}

const action = {
  calculateIMC: function (weight, height) {
    const imc = (weight / (height / 100) ** 2).toFixed(2);
    return imc;
  },
  addValueToModal: function (result) {
    span.innerText = result;
  },
  openModal: function () {
    modal.classList.add('open');

    const modalIsOpen = modal.classList.contains('open');
    if (modalIsOpen) {
      console.log('open')
      closeIcon.addEventListener('click', this.closeModal);
      modal.addEventListener('click', this.closeModal);
    }
  },
  closeModal: function () {
    modal.classList.remove('open');
    weight.value = '';
    height.value = '';
  },
  modalError: function(){
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
  },
};


button.addEventListener('click', startingCalculate);
