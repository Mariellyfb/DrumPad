

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

/* boton de back
const backButton = document.getElementById("atras");
backButton.addEventListener("click", () => {
    window.location.href = "proyectoBateria\index.html";
});*/

// funcion de pulsacion de tecla
/*const button9 = document.getElementById("boton9");
const sound9 = new Audio("./sounds/tom-mid.wav");
button9.addEventListener("click", () => {
    simularPulsacionTecla('C');
});

document.addEventListener("keydown", (event) => {
    const teclaPulsada = event.key;

    if (teclaPulsada === 'C') {
        sound9.play();
    }
});

function simularPulsacionTecla(tecla) {
    const event = new KeyboardEvent("keydown", { key: tecla });
    document.dispatchEvent(event);
}*/