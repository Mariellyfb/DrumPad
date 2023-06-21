"use strict"

// codigo que coje el primer boton en una variable y luego el sonido en otra y hace una funcion click

const button1 = document.getElementById("btn1");
const sound1 = new Audio("./sounds/crash.wav");
button1.addEventListener("click", () => {
    sound1.play();
});

const button2 = document.getElementById("btn2");
const sound2 = new Audio("./sounds/hihat-close.wav");
button2.addEventListener("click", () => {
    sound2.play();
});

const button3 = document.getElementById("btn3");
const sound3 = new Audio("./sounds/hihat-open.wav");
button3.addEventListener("click", () => {
    sound3.play();
});

const button4 = document.getElementById("btn4");
const sound4 = new Audio("./sounds/kick.wav");
button4.addEventListener("click", () => {
    sound4.play();
});

const button5 = document.getElementById("btn5");
const sound5 = new Audio("./sounds/ride.wav");
button5.addEventListener("click", () => {
    sound5.play();
});

const button6 = document.getElementById("btn6");
const sound6 = new Audio("./sounds/snare.wav");
button6.addEventListener("click", () => {
    sound6.play();
});

const button7 = document.getElementById("btn7");
const sound7 = new Audio("./sounds/tom-high.wav");
button7.addEventListener("click", () => {
    sound7.play();
});

const button8 = document.getElementById("btn8");
const sound8 = new Audio("./sounds/tom-low.wav");
button8.addEventListener("click", () => {
    sound8.play();
});

const button9 = document.getElementById("btn9");
const sound9 = new Audio("./sounds/tom-mid.wav");
button9.addEventListener("click", () => {
    sound9.play();
});


// METER EVENTOS DE LOS BOTONES ADICIONALES
// METER EVENTOS DE PORTADA

document.addEventListener('keydown', (event) => {
    const letraPulsada = String.fromCharCode(event.keyCode);
    console.log("La tecla seleccionada es:", letraPulsada);
    switch (letraPulsada) {
        case 'C':
        case 'c': 

        let sound9 = new Audio("./sounds/tom-mid.wav");
    
        sound9.play();
        console.log("play")
        break;

        case 'X':
        case 'x': 
    
            let sound8 = new Audio("./sounds/tom-low.wav");
        
            sound8.play();
            console.log("play")
        break;

        case 'Z':
        case 'z': 
        
            let sound7 = new Audio("./sounds/tom-high.wav");
            
            sound7.play();
            console.log("play")
        break;

        case 'D':
        case 'd': 
        
            let sound6 = new Audio("./sounds/snare.wav");
            
            sound6.play();
            console.log("play")
        break;

        case 'S':
        case 's': 
        
            let sound5 = new Audio("./sounds/ride.wav");
            
            sound5.play();
            console.log("play")
        break;

        case 'A':
        case 'a': 
        
            let sound4 = new Audio("./sounds/kick.wav");
            
            sound4.play();
            console.log("play")
        break;

        case 'E':
        case 'e': 
        
            let sound3 = new Audio("./sounds/hihat-open.wav");
            
            sound3.play();
            console.log("play")
        break;

        case 'W':
        case 'w': 
        
            let sound2 = new Audio("./sounds/hihat-close.wav");
            
            sound2.play();
            console.log("play")
        break;

        case 'Q':
        case 'q': 
        
            let sound1 = new Audio("./sounds/crash.wav");
            
            sound1.play();
            console.log("play")
        break;

    
    }
});


/*Probando a hacer el Rec y el stop y no funciona, pero se necesita hacer un tiempo y meterlo junto a la tecla presionada en ese tiempo en un objeto, despues este objeto es el mapa para replicar los sonidos */

let recBtn = document.getElementById("grabar");
recBtn.addEventListener('click', (event) => {

getTimeElapsed();

let recObject = {
    time: [timeDiff] ,
    key: [letraPulsada]
}

let recTime = recObject.time;
let recKey = recObject.key;

let stopBtn = document.getElementById
("parar");
stopBtn.addEventListener('click', (event) => {
    if (event) {
    event.preventDefault();
    console.log("Acabas de realizar un click en el stop");
    let ic = 0;
    } else ic = 1
});


for (let i = 1; i != 1; i = ic){
    recTime.push(timeDiff);
    recKey.push(letraPulsada);
    console.log(recObject);
} 

});

function getTimeElapsed() {
    const startTime = new Date(); // Obtiene la hora de inicio

    setInterval(() => {
      const currentTime = new Date(); // Obtiene la hora actual
      const timeDiff = currentTime - startTime; // Calcula la diferencia de tiempo en milisegundos

    console.log("la hora es:", timeDiff);
    }, 5000); // Imprime cada 5 segundos
};



