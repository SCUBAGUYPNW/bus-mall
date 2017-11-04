'use strict';

var allImages = [];
var randomForFirst = 0;
var randomForSecond = 0;
var randomForThird = 0;
var previouseForFirst = 0;
var previouseForSecond = 0;
var previouseForThird = 0;
var voteTotal = 0;

console.log('Global variables declared');

// debugger;
function CreateAllImages(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.numClicks = 0;
  this.numDisplayed = 0;
  allImages.push(this);

  this.imageVote = function() {
    this.numClicks++;
  };

  this.imagesDisplayed = function() {
    this.numDisplayed++;
  };
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
populateAllImages();

function createRandomNumber() {
  return Math.floor(Math.random() * (allImages.length));
}

function randomAllImages() {
  randomForFirst = createRandomNumber();
  while (randomForFirst === previouseForFirst || randomForFirst === previouseForSecond || randomForFirst === previouseForThird){
    randomForFirst = createRandomNumber();
  }
  randomForSecond = createRandomNumber();
  while (randomForSecond === randomForFirst || randomForSecond === previouseForFirst || randomForSecond === previouseForSecond || randomForSecond === previouseForThird) {
    randomForSecond = createRandomNumber();
  }
  randomForThird = createRandomNumber();
  while (randomForThird === randomForFirst || randomForThird === randomForSecond || randomForThird === previouseForFirst || randomForThird === previouseForSecond || randomForThird === previouseForThird){
    randomForThird = createRandomNumber();
  }
  previouseForFirst = randomForFirst;
  previouseForSecond = randomForSecond;
  previouseForThird = randomForThird;
};

var imageOneEl = document.getElementById('imageOne');
var imageTwoEl = document.getElementById('imageTwo');
var imageThreeEl = document.getElementById('imageThree');
imageOneEl.addEventListener('click', clickOne) ;
imageTwoEl.addEventListener('click', clickTwo) ;
imageThreeEl.addEventListener('click', clickThree) ;

function displayImages() {
  if (voteTotal < 25) {
    randomAllImages();
    var imageOne = allImages[randomForFirst].filePath;
    allImages[randomForFirst].imagesDisplayed();
    var imageTwo = allImages[randomForSecond].filePath;
    allImages[randomForSecond].imagesDisplayed();
    var imageThree = allImages[randomForThird].filePath;
    allImages[randomForThird].imagesDisplayed();
    imageOneEl.src = imageOne;
    imageTwoEl.src = imageTwo;
    imageThreeEl.src = imageThree;
    voteTotal++;
  } else {
    removeClicks();
  }
}

function removeClicks() {
  imageOneEl.removeEventListener('click', clickOne) ;
  imageTwoEl.removeEventListener('click', clickTwo) ;
  imageThreeEl.removeEventListener('click', clickThree) ;
  console.log('Remove Clicks Function');
  displayChart();
}

function displayChart () {
  console.log('This is how the chart will appear.');
  console.log(allImages);
}

displayImages();

function clickOne() {
  allImages[randomForFirst].imageVote();
  displayImages();
  //console.log(productVote + ' click one, productVote');
}
function clickTwo() {
  allImages[randomForSecond].imageVote();
  displayImages();
  //console.log(productVote + ' click two, productVote');
}
function clickThree() {
  allImages[randomForThird].imageVote();
  //console.log(productVote + ' click three, productVote');
  displayImages();
}
