const inputs = document.querySelectorAll('.input');

const button = document.querySelector('#button');

button.addEventListener('click', (event) => {
  event.preventDefault();
  const weight = document.querySelector('#weight').value;
  const height = document.querySelector('#height').value;

  const imcResult = calculateIMC(Number(weight), Number(height));

  if (imcResult) {
    const inputSpan = document.querySelector('.span');
    inputSpan.innerHTML = imcResult;
    openModal();
  }
});

function calculateIMC(weight, height) {
  try {
    if (isNaN(weight) || isNaN(height)) {
      modalError();
    } else {
      let imc = weight / (height / 100) ** 2;
      return (imc = imc.toFixed(2));
    }
    throw new Error('É necessário digitar números')
  } catch (error) {
    console.log(error.message);
  }
}
function openModal() {
  const modal = document.querySelector('#modal');
  modal.classList.add('open');
  const modalContainsOpen =  modal.classList.contains('open')

  if(modalContainsOpen){
    const closeIcon = document.querySelector('#close-icon');
    closeIcon.addEventListener('click', ()=>{
      modal.classList.remove('open');
      // inputs.innerText = '0'; falta ver o input
    })
    modal.addEventListener('click', ()=>{
      modal.classList.remove('open');
      // inputs.innerText = '0'; falta ver o input
    })
  }
}
function modalError() {
  const error = document.querySelector('.error');
  error.classList.add('open');
}


const erroContainsOpen = error.classList.contains('open')

if(erroContainsOpen){
  inputs.addEventListener('click', ()=>{
    error.classList.remove('open');
  })
}