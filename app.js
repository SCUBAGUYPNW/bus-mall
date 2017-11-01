'use strict';

var allImages = [];
var imagesDisplayed = [];
var productVote = [];
var a = 0;
var b = 0;
var c = 0;
var x = allImages.length + 1;
var y = allImages.length + 1;
var z = -allImages.length + 1;
var submitVote = 0;

console.log('Global variables declared');

function CreateAllImages(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  allImages.push(this);
}

function populateAllImages() {
  new CreateAllImages('Bag', 'img/bag.jpg');
  new CreateAllImages('Banana', 'img/banana.jpg');
  new CreateAllImages('Bathroom', 'img/bathroom.jpg');
  new CreateAllImages('Boots', 'img/boots.jpg');
  new CreateAllImages('Breakfast', 'img/breakfast.jpg');
  new CreateAllImages('BubbleGum', 'img/bubblegum.jpg');
  new CreateAllImages('Chair', 'img/chair.jpg');
  new CreateAllImages('Cthulhu', 'img/cthulhu.jpg');
  new CreateAllImages('Dog-Duck', 'img/dog-duck.jpg');
  new CreateAllImages('Dragon', 'img/dragon.jpg');
  new CreateAllImages('Pen', 'img/pen.jpg');
  new CreateAllImages('PetSweep', 'img/pet-sweep.jpg');
  new CreateAllImages('Scissors', 'img/scissors.jpg');
  new CreateAllImages('Shark', 'img/shark.jpg');
  new CreateAllImages('Sweep', 'img/sweep.png');
  new CreateAllImages('Tauntaun', 'img/tauntaun.jpg');
  new CreateAllImages('Unicorn', 'img/unicorn.jpg');
  new CreateAllImages('Tentical', 'img/usb.gif');
  new CreateAllImages('WaterCan', 'img/water-can.jpg');
  new CreateAllImages('WineGlass', 'img/wine-glass.jpg');
}

function createRandomNumber() {
  return Math.floor(Math.random() * (allImages.length));
}

function randomNumber() {
  a = createRandomNumber();
  while (a === x || a === y || a === z){
    a = createRandomNumber();
  }
  b = createRandomNumber();
  while (b === a || b === x || a === y || a === z) {
    b = createRandomNumber();
  }
  c = createRandomNumber();
  while (c === b || c === a || c === x || c === y || c === z){
    c = createRandomNumber();
  }

  console.log(a + ' Value for A');
  console.log(b + ' Value for B');
  console.log(c + ' Value for C');
  console.log(allImages);
  x = a;
  y = b;
  z = c;
  console.log(x + ' Value for X inside createRandomNumber');
  console.log(y + ' Value for Y inside createRandomNumber');
  console.log(z + ' Value for Z inside createRandomNumber');
  // return (x,y,z);
};

function displayImages() {
  populateAllImages();
  randomNumber();
  console.log(x + ' Outside value for X');
  console.log(y + ' Outside value for Y');
  console.log(z + ' Outside value for Z');
  var imageOne = allImages[a].filePath;
  imagesDisplayed.push(allImages[a].name);
  var imageTwo = allImages[b].filePath;
  imagesDisplayed.push(allImages[b].name);
  var imageThree = allImages[c].filePath;
  imagesDisplayed.push(allImages[c].name);

  var imageOneEl = document.getElementById('imageOne');
  imageOneEl.src = imageOne;
  var imageTwoEl = document.getElementById('imageTwo');
  imageTwoEl.src = imageTwo;
  var imageThreeEl = document.getElementById('imageThree');
  imageThreeEl.src = imageThree;
  imagesDisplayed.push(imageOne,imageTwo,imageThree);
}
displayImages();
console.log(imagesDisplayed + ' Images Displayed');

while (submitVote < 25) {
  var imageOneClick = document.getElementById('imageOne');
  var imageTwoClick = document.getElementById('imageTwo');
  var imageThreeClick = document.getElementById('imageThree');
  imageOneClick.addEventListener('click', clickOne) ;
  imageTwoClick.addEventListener('click', clickTwo) ;
  imageThreeClick.addEventListener('click', clickThree) ;

  console.log(submitVote + ' Inside Function');
  submitVote++;
  displayImages();
}
function clickOne() {
  productVote.push(allImages[a].name);
}
function clickTwo() {
  productVote.push(allImages[b].name);
}
function clickThree() {
  productVote.push(allImages[c].name);
}

// var imgEl = document.getElementById('goat-pic');
//
// imgEl.addEventListener('click', randomGoat);
