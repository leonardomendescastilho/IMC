const modal = document.querySelector('.modal-wrapper');
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const button = document.querySelector('#button');
const error = document.querySelector('.error');
const inputs = document.querySelectorAll('.input');


button.addEventListener('click', (event)=>{
  event.preventDefault()
  if(isInputNotANumber()){

  }
})

 


function isInputNotANumber(){
  if(isNaN(Number(weight.value)) || isNaN(Number(height.value))){
    error.classList.add('open');
  }else{
    return false;
  }
}