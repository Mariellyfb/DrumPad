"use strict"
// todos los getElementById()
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");
const button5 = document.getElementById("btn5");
const button6 = document.getElementById("btn6");
const button7 = document.getElementById("btn7");
const button8 = document.getElementById("btn8");
const button9 = document.getElementById("btn9");
const backElement = document.getElementById("atras");

// Todos los audios
const sound1 = new Audio("./sounds/crash.wav");
const sound2 = new Audio("./sounds/hihat-close.wav");
const sound3 = new Audio("./sounds/hihat-open.wav");
const sound4 = new Audio("./sounds/kick.wav");
const sound5 = new Audio("./sounds/ride.wav");
const sound6 = new Audio("./sounds/snare.wav");
const sound7 = new Audio("./sounds/tom-high.wav");
const sound8 = new Audio("./sounds/tom-low.wav");
const sound9 = new Audio("./sounds/tom-mid.wav");

// codigo que coje el primer boton en una variable y luego el sonido en otra y hace una funcion click para que suenen cada boton

button1.addEventListener("click", () => {
    let sound1 = new Audio("./sounds/crash.wav");
    sound1.play();
});

button2.addEventListener("click", () => {
    let sound2 = new Audio("./sounds/crash.wav");
    sound2.play();
});

button3.addEventListener("click", () => {
    let sound3 = new Audio("./sounds/crash.wav");
    sound3.play();
});

button4.addEventListener("click", () => {
    let sound4 = new Audio("./sounds/crash.wav");
    sound4.play();
});

button5.addEventListener("click", () => {
    let sound5 = new Audio("./sounds/crash.wav");
    sound5.play();
});

button6.addEventListener("click", () => {
    let sound6 = new Audio("./sounds/crash.wav");
    sound6.play();
});

button7.addEventListener("click", () => {
    let sound7 = new Audio("./sounds/crash.wav");
    sound7.play();
});

button8.addEventListener("click", () => {
    let sound8 = new Audio("./sounds/crash.wav");
    sound8.play();
});

button9.addEventListener("click", () => {
    let sound9 = new Audio("./sounds/crash.wav");
    
    sound9.play();
});


//controles teclado

document.addEventListener('keydown', (event) => {
    const letraPulsada = String.fromCharCode(event.keyCode);
    console.log("La tecla seleccionada es:", letraPulsada);
    switch (letraPulsada) {
        case 'C':
        case 'c': 

        let sound9 = new Audio("./sounds/tom-mid.wav");
        button9.style.filter = "brightness(125%)";
        sound9.play();

        break;

        case 'X':
        case 'x': 
    
            let sound8 = new Audio("./sounds/tom-low.wav");
            button8.style.filter = "brightness(125%)";
            sound8.play();
            
        break;

        case 'Z':
        case 'z': 
        
            let sound7 = new Audio("./sounds/tom-high.wav");
            button7.style.filter = "brightness(125%)";
            sound7.play();
            
        break;

        case 'D':
        case 'd': 
        
            let sound6 = new Audio("./sounds/snare.wav");
            button6.style.filter = "brightness(125%)";
            sound6.play();
            
        break;

        case 'S':
        case 's': 
        
            let sound5 = new Audio("./sounds/ride.wav");
            button5.style.filter = "brightness(125%)";
            sound5.play();
            
        break;

        case 'A':
        case 'a': 
        
            let sound4 = new Audio("./sounds/kick.wav");
            button4.style.filter = "brightness(125%)";
            sound4.play();
            
        break;

        case 'E':
        case 'e': 
        
            let sound3 = new Audio("./sounds/hihat-open.wav");
            button3.style.filter = "brightness(125%)";
            sound3.play();
            
        break;

        case 'W':
        case 'w': 
        
            let sound2 = new Audio("./sounds/hihat-close.wav");
            button2.style.filter = "brightness(125%)";
            sound2.play();

        break;

        case 'Q':
        case 'q': 
        
            let sound1 = new Audio("./sounds/crash.wav");
            button1.style.filter = "brightness(125%)";
            sound1.play();
            
        break;

    
    }
});

document.addEventListener('keyup', (event) => {
    const letraPulsada = String.fromCharCode(event.keyCode);
    console.log("La tecla seleccionada es:", letraPulsada);
    switch (letraPulsada) {
        case 'C':
        case 'c': 

            button9.style.filter = "brightness(100%)";

        break;

        case 'X':
        case 'x': 
    
        
            button8.style.filter = "brightness(100%)";

            
        break;

        case 'Z':
        case 'z': 
        
            
            button7.style.filter = "brightness(100%)";

            
        break;

        case 'D':
        case 'd': 
    
            button6.style.filter = "brightness(100%)";

            
        break;

        case 'S':
        case 's': 
        
            button5.style.filter = "brightness(100%)";

            
        break;

        case 'A':
        case 'a': 
        
            button4.style.filter = "brightness(100%)";

            
        break;

        case 'E':
        case 'e': 
        
            
            button3.style.filter = "brightness(100%)";
            
        break;

        case 'W':
        case 'w': 
        
            button2.style.filter = "brightness(100%)";

        break;

        case 'Q':
        case 'q': 
        
            button1.style.filter = "brightness(100%)";
            
        break;

    
    }
});




// Obtener el botón y el contenido del botón desplegable
const Btn = document.querySelector('.inst-btn');
const Content = document.querySelector('.ul-content');

// Mostrar/ocultar el contenido del botón desplegable al hacer clic en el botón
Btn.addEventListener('click', function() {
Content.style.display = (Content.style.display === 'block') ? 'none' : 'block';
});

//Funciones

// funcion de redirigir a otra pag con boton Back

backElement.addEventListener('click', (event) => {
    redirectToOtherPage("index.html");
});

// boton play url
/*const playElement = document.getElementById("play");
playElement.addEventListener('click', (event) => {
    redirectToOtherPage("batery.html");
});*/

// funcion para redireccionar URL
function redirectToOtherPage(page) {
    window.location.href = page;
};

/*Probando a hacer el Rec y el stop y no funciona, pero se necesita hacer un tiempo y meterlo junto a la tecla presionada en ese tiempo en un objeto, despues este objeto es el mapa para replicar los sonidos 

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
};*/