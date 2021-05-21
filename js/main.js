"use strict";

const userNumber = document.querySelector(".js-number");
const buttonElement = document.querySelector(".js-button");
const trackElement = document.querySelector(".js-track");
const attemptsElement = document.querySelector(".js-attempts");
//cuando carga la pagina es que debe ejecutarse esta función:
let getRandomNumber = (max) => {
  return Math.ceil(Math.random() * 100);
};
const randomNumber = getRandomNumber(100);
console.log(randomNumber);
//Esto es lo que me activó la función cuando cargara la página.
//Me faltó guardarlo en una variable
//Ej: const randomNumber = getRandomNumber(100);console.log(numberRandom);

//coger el numero de la usuaria y luego hacer la comparación:

function compareElements() {
  const initialNumber = parseInt(userNumber.value); //Faltó convertir valor a número.
  console.log(initialNumber);
  const numberMax = 100;
  const numberMin = 0;
  if (initialNumber === randomNumber) {
    trackElement.value = "Has ganado campeona!!!";
  } else if (initialNumber < randomNumber
    ) {
    trackElement.value = "Demasiado bajo";
  } else if (initialNumber > randomNumber) {
    trackElement.value = "Demasiado alto";
  } else initialNumber < numberMin || initialNumber > numberMax; //Esto no hacia falta escribirlo ya que si no cumple las anteriores, por descarte aplica esta)
  trackElement.value = "El número debe estar entre 1 y 100";
  // if(initialNumber < 1 || initialNumber > 100){mensaje}

  //como el contador se activa al hacer click puedo "llamar" a la función en este punto. Ej: counter();
  //Cuando tengo una función manejadora, esta función va en esa función y no aquí.
}

// falta el contador (function)
//attemptsNumber++
/*ej :  let cont=0 --esta es la variable del contador que comienza en cero--
function counter() {
    cont++ 
    attemptsElement.value=`numero de intentos ${cont}`*/
let cont = 0;
function counter() {
  cont++;
  attemptsElement.value = `Intento número: ${cont}`;
}

function onButtonClick() {
  getRandomNumber(); //Esto no hace falta aquí ya que quiero que se ejecute al cargar la pagina y antes de ejecutar esta función.
  compareElements();
  //counter();
  counter();
}

buttonElement.addEventListener("click", onButtonClick);
