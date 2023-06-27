'use strict';

// todos los getElementById()
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const button4 = document.getElementById('btn4');
const button5 = document.getElementById('btn5');
const button6 = document.getElementById('btn6');
const button7 = document.getElementById('btn7');
const button8 = document.getElementById('btn8');
const button9 = document.getElementById('btn9');

const backElement = document.getElementById('atras');
const recElement = document.getElementById('grabar');
const playElement = document.getElementById('play');

let recording = false;

let recStartTime;
let songNotes = [];

// Obtener el botón y el contenido del botón desplegable
const Btn = document.querySelector('.inst-btn');
const Content = document.querySelector('.ul-content');

const soundElement = (letraPulsada, audio) => {
  recFun(letraPulsada);
  let sound = new Audio(audio);
  //button1.classList.add = 'active';
  sound.play();
};

// Todos los audios
const soundElementWrapper = (letra) => {
  switch (letra.toUpperCase()) {
    case 'C':
      soundElement(letra, './sounds/tom-mid.wav');
      break;
    case 'X':
      soundElement(letra, './sounds/tom-low.wav');
      break;
    case 'Z':
      soundElement(letra, './sounds/tom-high.wav');
      break;
    case 'D':
      soundElement(letra, './sounds/snare.wav');
      break;
    case 'S':
      soundElement(letra, './sounds/ride.wav');
      break;
    case 'A':
      soundElement(letra, './sounds/kick.wav');
      break;
    case 'E':
      soundElement(letra, './sounds/hihat-open.wav');
      break;
    case 'W':
      soundElement(letra, './sounds/hihat-close.wav');
      break;
    case 'Q':
      soundElement(letra, './sounds/crash.wav');
      break;
  }
};

const recFun = (char) => {
  if (isRecording()) {
    recordNote({
      key: char,
      startTime: Date.now() - recStartTime,
    });
  }
};

// codigo que coje el primer boton en una variable y luego el sonido en otra y hace una funcion click para que suenen cada boton
button1.addEventListener('click', () => {
  soundElementWrapper('Q');
});

button2.addEventListener('click', () => {
  soundElementWrapper('W');
});

button3.addEventListener('click', () => {
  soundElementWrapper('E');
});

button4.addEventListener('click', () => {
  soundElementWrapper('A');
});

button5.addEventListener('click', () => {
  soundElementWrapper('S');
});

button6.addEventListener('click', () => {
  soundElementWrapper('D');
});

button7.addEventListener('click', () => {
  soundElementWrapper('Z');
});

button8.addEventListener('click', () => {
  soundElementWrapper('X');
});

button9.addEventListener('click', () => {
  soundElementWrapper('C');
});

//controles teclado

document.addEventListener('keydown', (e) => playNote(e));

function playNote(event) {
  const letraPulsada = String.fromCharCode(event.keyCode);
  console.log('La tecla seleccionada es:', letraPulsada);
  soundElementWrapper(letraPulsada);
}

document.addEventListener('keyup', (event) => {
  const letraPulsada = String.fromCharCode(event.keyCode);
  console.log('La tecla seleccionada es:', letraPulsada);
  switch (letraPulsada) {
    case 'C':
    case 'c':
      button9.classList.remove = 'active';
      break;

    case 'X':
    case 'x':
      button8.classList.remove = 'active';

      break;

    case 'Z':
    case 'z':
      button7.classList.remove = 'active';

      break;

    case 'D':
    case 'd':
      button6.classList.remove = 'active';

      break;

    case 'S':
    case 's':
      button5.classList.remove = 'active';

      break;

    case 'A':
    case 'a':
      button4.classList.remove = 'active';

      break;

    case 'E':
    case 'e':
      button3.classList.remove = 'active';

      break;

    case 'W':
    case 'w':
      button2.classList.remove = 'active';

      break;

    case 'Q':
    case 'q':
      button1.classList.remove = 'active';

      break;
  }
});

// Mostrar/ocultar el contenido del botón desplegable al hacer clic en el botón
Btn.addEventListener('click', function () {
  Content.style.display = Content.style.display === 'block' ? 'none' : 'block';
});

//Funciones

// funcion de redirigir a otra pag con boton Back

backElement.addEventListener('click', (event) => {
  redirectToOtherPage('index.html');
});

recElement.addEventListener('click', toggleRec);
playElement.addEventListener('click', toggleRec);

function redirectToOtherPage(page) {
  window.location.href = page;
}

function toggleRec() {
  recElement.classList.toggle('active');
  if (isRecording()) {
    startRec();
  } else {
    stopRec();
  }
}

function isRecording() {
  return recElement != null && recElement.classList.contains('active');
}

function startRec() {
  recStartTime = Date.now();
  songNotes = [];
  playElement.classList.remove('show');
}

function stopRec() {
  playSong();
  playElement.classList.add('show');
}

function playSong() {
  console.log('songNotes inicial:', songNotes);
  readPlay();
}

function recordNote(note) {
  songNotes.push(note);
}

function readPlay() {
  let timePlay = 0;

  const playInterval = setInterval(() => {
    let i = 0;
    while (i < songNotes.length && songNotes[i].startTime < timePlay) {
      console.log(
        `Sonido ${songNotes[i].key} ${songNotes[i].startTime} (${timePlay})`
      );
      soundElementWrapper(songNotes[i].key);
      songNotes.splice(i, 1);
      i++;
    }

    if (songNotes.length === 0) {
      console.log('STOP');
      clearInterval(playInterval);
    }

    timePlay += 500;
  }, 500);
}
