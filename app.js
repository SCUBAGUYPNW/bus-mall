'use strict';

var allImages = [];
var productName = [];
var productVote = [];
var productDisplayed = [];
var randomForFirst = 0;
var randomForSecond = 0;
var randomForThird = 0;
var previouseForFirst = 0;
var previouseForSecond = 0;
var previouseForThird = 0;
var voteTotal = 0;

if (localStorage.getItem('productData')){
  allImages = [];
  allImages = JSON.parse(localStorage.getItem('productData'));
} else {
  populateAllImages();
}

// debugger;
function CreateAllImages(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.numClicks = 0;
  this.numDisplayed = 0;
  allImages.push(this);
};

var allImagesString = JSON.stringify(allImages);
localStorage.setItem('productData', allImagesString);

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
var allImagesString = JSON.stringify(allImages);
localStorage.setItem('productData', allImagesString);

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
    allImages[randomForFirst].numDisplayed++;
    var imageTwo = allImages[randomForSecond].filePath;
    allImages[randomForSecond].numDisplayed++;
    var imageThree = allImages[randomForThird].filePath;
    allImages[randomForThird].numDisplayed++;
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
  displayChart();
}

function populateArrays() {
  for ( var i = 0; i < allImages.length; i++) {
    productName.push(allImages[i].name);
    productVote.push(allImages[i].numClicks);
    productDisplayed.push(allImages[i].numDisplayed);
  }
  console.log(productVote + ' productVote');
  console.log(productName + ' productName');
  console.log(productDisplayed + 'Number of times Product Displayed');
  var productNameString = JSON.stringify(productName);
  localStorage.productNameData = productNameString;

  if (localStorage.getItem('custVoteData')){
    var lastVoteArray = JSON.parse(localStorage.getItem('custVoteData'));
    var cumulativeVoteData = [];
    for (var j = 0; j < productVote.length; j++) {
      cumulativeVoteData.push(productVote[j] + lastVoteArray[j]);
      console.log(lastVoteArray + ' lastVoteArray');
      console.log(productVote + ' productVote');
      console.log(cumulativeVoteData + ' cumulativeVoteData');
      console.log(productVote[j], lastVoteArray[j] + ' two');
      console.log(productVote[j] + ' j');
    }
    var productVoteString = JSON.stringify(cumulativeVoteData);
    localStorage.custVoteData = productVoteString;

  } else {
    var productVoteString = JSON.stringify(productVote);
    localStorage.custVoteData = productVoteString;
  }
  if (localStorage.getItem('productDisplayedData')){
    var lastProductDisplayedData = JSON.parse(localStorage.getItem('productDisplayedData'));
    var cumulativeProductDisplayedData = [];
    for (var k = 0; k < productName.length; k++) {
      cumulativeProductDisplayedData.push(lastProductDisplayedData[k] + productDisplayed[k]);
      console.log(cumulativeProductDisplayedData + ' cumulativeProductDisplayedData');
    }
    var productDisplayedString = JSON.stringify(productDisplayed);
    localStorage.productDisplayedData = productNameString;

  } else {
    var productDisplayedString = JSON.stringify(productDisplayed);
    localStorage.productDisplayedData = productNameString;
  }
}


function displayChart () {
  populateArrays();
  var ctx = document.getElementById('productChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productName,
      datasets: [{
        label: 'Number of Votes',
        data: productVote,
        backgroundColor: [
          '#e6194b',
          '#3cb44b',
          '#ffe119',
          '#0082c8',
          '#f58231',
          '#911eb4',
          '#46f0f0',
          '#f032e6',
          '#d2f53c',
          '#fabebe',
          '#008080',
          '#e6beff',
          '#aa6e28',
          '#06fac8',
          '#800000',
          '#aaffc3',
          '#808000',
          '#ffd8b1',
          '#000080',
          '#808080'],
        borderColor: [
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
        ],
        borderWidth: 2
      },
      {
        label: 'Times Displayed',
        data: productDisplayed,
        backgroundColor: [
          '#e6194b',
          '#3cb44b',
          '#ffe119',
          '#0082c8',
          '#f58231',
          '#911eb4',
          '#46f0f0',
          '#f032e6',
          '#d2f53c',
          '#fabebe',
          '#008080',
          '#e6beff',
          '#aa6e28',
          '#06fac8',
          '#800000',
          '#aaffc3',
          '#808000',
          '#ffd8b1',
          '#000080',
          '#808080'],
        borderColor: [
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
        ],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      },
      responsive: false,
      maintainAspectRatio: false
    }
  });
}

displayImages();

function clickOne() {
  allImages[randomForFirst].numClicks++;
  displayImages();
  //console.log(productVote + ' click one, productVote');
}
function clickTwo() {
  allImages[randomForSecond].numClicks++;
  displayImages();
  //console.log(productVote + ' click two, productVote');
}
function clickThree() {
  allImages[randomForThird].numClicks++;
  //console.log(productVote + ' click three, productVote');
  displayImages();
}
