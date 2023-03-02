const rangeInput = document.querySelectorAll('input');
const value = document.querySelectorAll('.value');
const container = document.querySelector('.container');

for(let i=0; i<rangeInput.length; i++){
    value[i].textContent = rangeInput[i].value;
    rangeInput[i].addEventListener('input', ()=>{
        value[i].textContent = rangeInput[i].value;

        if(rangeInput[i].id === 'bright'){
            container.style.filter = `brightness(${rangeInput[i].value}%)`
        }
        if(rangeInput[i].id === 'contrast'){
            container.style.filter = `contrast(${rangeInput[i].value}%)`
        }
    })
}
