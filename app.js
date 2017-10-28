'use strict';

var allImages = [];
var imagesDisplayed = [];
var x = '';
var y = '';
var z = '';

//creator function
//create images 1-20 push to allImages

function randomNumber() {
var a = Math.floor(Math.random() * (allImages.length));
while  (a === x || a === y || a === z);
    a = Math.floor(Math.random() * (allImages.length));
var b = Math.floor(Math.random() * (allImages.length));
   while  (b === a || b === x || a === y || a === z);
   b = Math.floor(Math.random() * (allImages.length));
var c = Math.floor(Math.random() * (allImages.length));
   while (c === b || c === a || c === x || c === y || c === z);
   c = Math.floor(Math.random() * (allImages.length));
x = a;
y = b;
z = c;
imagesDisplayed.push(a,b,c);
return (a,b,c,x,y,z);
}

function displayImages() {
  randomNumber();
var imageOne = pull.allImages[a].filePath;
var imageOneDescription = pull.allImages[a].description;
var imageTwo = pull.allImages[b].filePath;
var imagetwoDescription = pull.allImages[b].description;
var imageThree = pull.allImages[c].filePath;
var imageThreeDescription = pull.allImages[c].description;
var imageOneEl = document.getElementById('imageOne');
imageOneEl.src = imageOne;
var imageTwoEl = imageTwo;
var imageThreeEl = imageThree;
}
process user click.
radio buttons x, y, or z
Click equals x, y, or z
