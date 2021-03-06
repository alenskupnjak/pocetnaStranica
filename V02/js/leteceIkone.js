const canvasAngular = document.getElementById('canvasAngular');
const cAngular = canvasAngular.getContext('2d');

const canvasJS = document.getElementById('canvasjs');
const cJS = canvasJS.getContext('2d');

const canvasNode = document.getElementById('canvasnode');
const cNode = canvasNode.getContext('2d');

const angularDOM = document.querySelector('.angulardark');
const jsDOM = document.getElementById('js');
const nodeDOM = document.getElementById('node');

canvasJS.width = window.innerWidth;
canvasJS.height = window.innerHeight;
canvasAngular.width = window.innerWidth;
canvasAngular.height = window.innerHeight;
canvasNode.width = window.innerWidth;
canvasNode.height = window.innerHeight;

let poljeAngular = [];
let poljeJS = [];
let poljeNodeJS = [];

// Definiranje img
const angularImg = new Image();
angularImg.src = './img/angular.png';
const javascript = new Image();
javascript.src = './img/javascript.png';
const nodejs = new Image();
nodejs.src = './img/nodejs.png';

// Crtanje ikone Angulara (class)
class IkonaAngular {
  constructor(x, y, dx, dy, poljeX, poljeY, range) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.poljeX = poljeX;
    this.poljeY = poljeY;
    this.range = range;
  }

  // DRAW
  draw() {
    cAngular.drawImage(angularImg, this.x, this.y, 30, 15);
    this.x = this.x + 3;
  }

  // UPDATE
  update() {
    if (
      this.x > this.poljeX + this.range ||
      this.x < this.poljeX - this.range
    ) {
      this.dx = -this.dx;
    }

    if (
      this.y > this.poljeY + this.range ||
      this.y < this.poljeY - this.range
    ) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}

// Crtanje ikone javascript
function IkonaJS(x, y, dx, dy, poljeX, poljeY, range) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;

  // DRAW
  this.draw = function () {
    cJS.drawImage(javascript, this.x, this.y, 25, 30);
    this.x = this.x + 3;
  };

  // UPDATE
  this.update = function () {
    if (this.x > poljeX + range || this.x < poljeX - range) {
      this.dx = -this.dx;
    }

    if (this.y > poljeY + range || this.y < poljeY - range) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  };
}

// Crtanje ikone NodeJS
function IkonaNode(x, y, dx, dy, poljeX, poljeY, range) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;

  // crtanje NODE js
  this.draw = function () {
    cNode.drawImage(nodejs, this.x, this.y, 30, 90);
    this.x = this.x + 3;
  };

  // UPDATE
  this.update = function () {
    if (this.x > poljeX + range || this.x < poljeX - range) {
      this.dx = -this.dx;
    }

    if (this.y > poljeY + range || this.y < poljeY - range) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  };
}

function popuniPoljaJS(poljeX, poljeY, range, brojIkona, program) {
  for (let index = 0; index < brojIkona; index++) {
    let x = poljeX + Math.random() * range - 15;
    let y = poljeY + Math.random() * range - 15;
    let dx = Math.random() * 4;
    let dy = Math.random() * 4;
    poljeJS.push(new IkonaJS(x, y, dx, dy, poljeX, poljeY, range));
  }
}

function popuniPoljaAngular(poljeX, poljeY, range, brojIkona, program) {
  for (let index = 0; index < brojIkona; index++) {
    let x = poljeX + Math.random() * range - 15;
    let y = poljeY + Math.random() * range - 15;
    let dx = Math.random() * 4;
    let dy = Math.random() * 4;
    poljeAngular.push(new IkonaAngular(x, y, dx, dy, poljeX, poljeY, range));
  }
}

function popuniPoljaNode(poljeX, poljeY, range, brojIkona, program) {
  for (let index = 0; index < brojIkona; index++) {
    let x = poljeX + Math.random() * range - 15;
    let y = poljeY + Math.random() * range - 15;
    let dx = Math.random() * 4;
    let dy = Math.random() * 4;
    poljeNodeJS.push(new IkonaNode(x, y, dx, dy, poljeX, poljeY, range));
  }
}

// Animacija Angulara
function animateAngular() {
  requestAnimationFrame(animateAngular);
  cAngular.clearRect(0, 0, canvasAngular.width, canvasAngular.height);
  for (let index = 0; index < poljeAngular.length; index++) {
    poljeAngular[index].draw();
    poljeAngular[index].update();
  }
}

// Animacija Javascripta
function animateJS() {
  requestAnimationFrame(animateJS);
  cJS.clearRect(0, 0, canvasJS.width, canvasJS.height);
  for (let index = 0; index < poljeJS.length; index++) {
    poljeJS[index].draw();
    poljeJS[index].update();
  }
}

// Animacija Node
function animateNode() {
  requestAnimationFrame(animateNode);
  cNode.clearRect(0, 0, canvasNode.width, canvasNode.height);
  for (let index = 0; index < poljeNodeJS.length; index++) {
    poljeNodeJS[index].draw();
    poljeNodeJS[index].update();
  }
}

animateAngular();
animateJS();
animateNode();

// ANGULAR
angularDOM.addEventListener('mouseenter', (e) => {
  popuniPoljaAngular(0, 400, 500, 5, poljeAngular);
});

// JAVASCRIPT
jsDOM.addEventListener('mouseenter', (e) => {
  popuniPoljaJS(0, 400, 400, 5, poljeJS);
});

// NODEJS
jsDOM.addEventListener('mouseenter', (e) => {
  popuniPoljaNode(0, 450, 300, 5, poljeNodeJS);
});
