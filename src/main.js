// Create variables targetting the relevant DOM elements here 👇
var coverImg = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var coverTaglineOne = document.querySelector(".tagline-1");
var coverTaglineTwo = document.querySelector(".tagline-2");
var randomCoverButton = document.querySelector(".random-cover-button");
var formButton = document.querySelector(".make-new-button");
var saveCoverButtton = document.querySelector(".save-cover-button");
var homeButton = document.querySelector(".home-button");
var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomCoverButton.addEventListener("click", displayCover);
formButton.addEventListener("click", makeYourOwnFormView);



// Create your event handlers and other functions here 👇

function makeYourOwnFormView() {
  formView.classList.toggle("hidden");
  homeView.classList.toggle("hidden");
  randomCoverButton.classList.toggle("hidden");
  saveCoverButtton.classList.toggle("hidden");
  formButton.classList.toggle("hidden"); 
  homeButton.classList.toggle("hidden");
}



// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};


function displayCover() {
  var randomCoverImg = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomTaglineOne = descriptors[getRandomIndex(descriptors)];
  var randomTaglineTwo = descriptors[getRandomIndex(descriptors)];
  currentCover += new Cover(randomCoverImg, randomTitle, randomTaglineOne, randomTaglineTwo);
  coverImg.setAttribute("src", randomCoverImg);
  coverTitle.innerText = randomTitle;
  coverTaglineOne.innerText = randomTaglineOne;
  coverTaglineTwo.innerText = randomTaglineTwo;
};

displayCover();
