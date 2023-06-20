"use strict"

const crashSound = new Audio ("C:\Users\User\OneDrive\Documents\GitHub\Bateria-JS-grupo-3\proyectoBateria\sounds\crash.wav");

const hihatcSound = new Audio ("C:\Users\User\OneDrive\Documents\GitHub\Bateria-JS-grupo-3\proyectoBateria\sounds\hihat-close.wav");

const hihatoSound = new Audio ("C:\Users\User\OneDrive\Documents\GitHub\Bateria-JS-grupo-3\proyectoBateria\sounds\hihat-open.wav");

const kickSound = new Audio ("C:\Users\User\OneDrive\Documents\GitHub\Bateria-JS-grupo-3\proyectoBateria\sounds\kick.wav");

const rideSound = new Audio ("C:\Users\User\OneDrive\Documents\GitHub\Bateria-JS-grupo-3\proyectoBateria\sounds\ride.wav");

const snareSound = new Audio ("C:\Users\User\OneDrive\Documents\GitHub\Bateria-JS-grupo-3\proyectoBateria\sounds\snare.wav");

const tomhSound = new Audio ("C:\Users\User\OneDrive\Documents\GitHub\Bateria-JS-grupo-3\proyectoBateria\sounds\tom-high.wav");

const tomlSound = new Audio ("C:\Users\User\OneDrive\Documents\GitHub\Bateria-JS-grupo-3\proyectoBateria\sounds\tom-low.wav");

const tommSound = new Audio ("C:\Users\User\OneDrive\Documents\GitHub\Bateria-JS-grupo-3\proyectoBateria\sounds\tom-mid.wav");

const buttons = document.getElementsByClassName("botones");

// codigo que coje el primer boton en una variable y luego el sonido en otra y hace una funcion click
  const button = document.getElementById("boton1");
const sound1 = new Audio("./sounds/crash.wav");
button.addEventListener("click", () => {
    sound1.play();
});
