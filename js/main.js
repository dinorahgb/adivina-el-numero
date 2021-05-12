'use strict';

const userNumber = document.querySelector(".js-number");
const buttonElement = document.querySelector(".js-button");
const trackElement = document.querySelector(".js-track");
const attemptsElement = document.querySelector(".js-attempts");
let attemptsNumber = attemptsElement.value;

let getRandomNumber = (max) => {
 return Math.ceil(Math.random() * 100);
   }
   console.log(getRandomNumber());

function compareElements(ev) {
let initialNumber = userNumber.value;
const numberMax = 100;
const numberMin = 1;

if (initialNumber === getRandomNumber) {
    trackElement.value = 'Has ganado campeona!!!';
}
else if (initialNumber < getRandomNumber
    ) {
        trackElement.value = 'Demasiado bajo';
    }
else if (initialNumber > getRandomNumber){
    trackElement.value = 'Demasiado alto';
}
else (initialNumber < numberMin > numberMax)
    trackElement.value = 'El número debe estar entre 1 y 100';
}


function onButtonClick(){
    getRandomNumber();
    compareElements();
}


buttonElement.addEventListener('click', onButtonClick);