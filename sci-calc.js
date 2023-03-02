function dis(val){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value += val;
}
function solve(){
    const natDisplay = document.getElementById('calculate');
    let x = natDisplay.value;
    let y = eval(x);
    natDisplay.value = y;
}
function del(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = natDisplay.value.substring(0, natDisplay.value.length*1-1);
}
function cls(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value =''
}

// Code for the powers----

function x2(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = Math.pow(natDisplay.value, 2);
}
function x3(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = Math.pow(natDisplay.value, 3);
}
function x4(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = Math.pow(natDisplay.value, 4);
}
function x5(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = Math.pow(natDisplay.value, 5);
}
function x6(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = Math.pow(natDisplay.value, 6);
}
function x7(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = Math.pow(natDisplay.value, 7);
}
function x9(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = Math.pow(natDisplay.value, 9);
}

// Code for trig functions---

// ***sin***
function sin(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = Math.sin(natDisplay.value*(Math.PI/180))
}
function asin(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = Math.asin(natDisplay.value)
}
function sinh(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = Math.sinh(natDisplay.value);
}
function asinh(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = Math.asinh(natDisplay.value);
}

// ***cos***
function cos(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = Math.cos(natDisplay.value*(Math.PI/180))
}
function acos(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = Math.acos(natDisplay.value)
}
function cosh(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = Math.cosh(natDisplay.value);
}
function acosh(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = Math.acosh(natDisplay.value);
}

// ***tan***
function tan(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = Math.tan(natDisplay.value*(Math.PI/180))
}
function atan(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = Math.atan(natDisplay.value)
}
function tanh(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = Math.tanh(natDisplay.value);
}
function atanh(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = Math.atanh(natDisplay.value);
}

// ***cot***
function cot(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = 1/Math.tan(natDisplay.value*(Math.PI/180));
}
function coth(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = 1/Math.tanh(natDisplay.value);
}

// ***log***
function log(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = Math.log10(natDisplay.value);
}
function ln(){
    const natDisplay = document.getElementById('calculate');
    natDisplay.value = Math.log(natDisplay.value);
}

// Code for the Brightness and contrast

const rangeInput = document.querySelectorAll('input');
const value = document.querySelectorAll('.value');
const midBoxOne = document.querySelector('.mid-box-one');
const body = document.querySelector('body');

for(let i=0; i<rangeInput.length; i++){
    value[i].textContent = rangeInput[i].value;
    rangeInput[i].addEventListener('input', ()=>{
        value[i].textContent = rangeInput[i].value;

        if(rangeInput[i].id === 'bright'){
            body.style.filter = `brightness(${rangeInput[i].value}%)`
        }
        if(rangeInput[i].id === 'contrast'){
            midBoxOne .style.filter = `contrast(${rangeInput[i].value}%)`
        }
    })
}
