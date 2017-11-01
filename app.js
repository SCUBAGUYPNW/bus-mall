'use strict';

var allImages = [];
var imagesDisplayed = [];
var productVote = [];
var randomForFirst = 0;
var randomForSecond = 0;
var randomForThird = 0;
var previouseForFirst = 0;
var previouseForSecond = 0;
var previouseForThird = 0;
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

  console.log(randomForFirst + ' Value for First');
  console.log(randomForSecond + ' Value for Second');
  console.log(randomForThird + ' Value for Third');

  previouseForFirst = randomForFirst;
  previouseForSecond = randomForSecond;
  previouseForThird = randomForThird;
  console.log(previouseForFirst + ' Value for previouseForFirst inside createRandomNumber');
  console.log(previouseForSecond + ' Value for previouseForSecond inside createRandomNumber');
  console.log(previouseForThird + ' Value for previouseForThird inside createRandomNumber');
  // return (x,y,z);
};

function displayImages() {
  randomAllImages();
  console.log(previouseForFirst + ' Outside value for X');
  console.log(previouseForSecond + ' Outside value for Y');
  console.log(previouseForThird + ' Outside value for Z');
  var imageOne = allImages[randomForFirst].filePath;
  imagesDisplayed.push(allImages[randomForFirst].name);
  var imageTwo = allImages[randomForSecond].filePath;
  imagesDisplayed.push(allImages[randomForSecond].name);
  var imageThree = allImages[randomForThird].filePath;
  imagesDisplayed.push(allImages[randomForThird].name);
  console.log(imagesDisplayed + 'images Displayed');

  var imageOneEl = document.getElementById('imageOne');
  imageOneEl.src = imageOne;
  var imageTwoEl = document.getElementById('imageTwo');
  imageTwoEl.src = imageTwo;
  var imageThreeEl = document.getElementById('imageThree');
  imageThreeEl.src = imageThree;
//  imagesDisplayed.push(imageOne,imageTwo,imageThree);
}
console.log(imagesDisplayed + ' Images Displayed');

  displayImages();
  var imageOneClick = document.getElementById('imageOne');
  var imageTwoClick = document.getElementById('imageTwo');
  var imageThreeClick = document.getElementById('imageThree');


  function clickOne() {
    productVote.push(allImages[randomForFirst].name);
    displayImages();
    submitVote++
    console.log(submitVote + 'click one');
  }
  function clickTwo() {
    productVote.push(allImages[randomForSecond].name);
    displayImages();
    submitVote++
    console.log(submitVote + 'click two');
      }
  function clickThree() {
    productVote.push(allImages[randomForThird].name);
    displayImages();
    submitVote++
    console.log(submitVote + 'click three');
      }
  if (submitVote < 25) {
    imageOneClick.addEventListener('click', clickOne) ;
    imageTwoClick.addEventListener('click', clickTwo) ;
    imageThreeClick.addEventListener('click', clickThree) ;
    console.log(submitVote + ' submitVote 1');
  }

  if (submitVote > 24) {
    imageOneClick.removeEventListener('click', clickOne) ;
    imageTwoClick.removeEventListener('click', clickTwo) ;
    imageThreeClick.removeEventListener('click', clickThree) ;
    console.log(submitVote + ' submitVote 2');
}
