const mainTitle = document.querySelector("#title");
let curValue =0;

const btnDecrease = document.querySelector("#decrease");
const btnReset = document.querySelector("#reset");
const btnIncrease = document.querySelector("#increase");

btnIncrease.addEventListener('click',() =>{
    curValue ++;
    mainTitle.textContent =curValue;
});

btnDecrease.addEventListener('click',() =>{
    curValue --;
    mainTitle.textContent =curValue;
});

btnIncrease.addEventListener('click',() =>{
    curValue +1;
    mainTitle.textContent =curValue;
});

btnReset.addEventListener('click',() =>{
    curValue =0;
    mainTitle.textContent =curValue;
});