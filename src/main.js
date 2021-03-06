var coverImg = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var coverTaglineOne = document.querySelector(".tagline-1");
var coverTaglineTwo = document.querySelector(".tagline-2");
var randomCoverButton = document.querySelector(".random-cover-button");
var formButton = document.querySelector(".make-new-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var homeButton = document.querySelector(".home-button");
var newBookButton = document.querySelector(".create-new-book-button");
var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");
var savedView = document.querySelector(".saved-view");
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

window.onload = displayCover;
randomCoverButton.addEventListener("click", displayCover);
formButton.addEventListener("click", viewFormButton);
viewSavedButton.addEventListener("click", viewSavedCoversButton);
homeButton.addEventListener("click", viewHomeButton);
newBookButton.addEventListener("click", createBook);

function viewFormButton() {
  if (homeView.classList[2] !== "hidden") {
    homeAndForm();
  } else if (savedView.classList[2] !== "hidden") {
    formAndSave();
  }
};

function viewSavedCoversButton() {
  if (homeView.classList[2] !== "hidden") {
    homeAndSave();
  } else if (formView.classList[2] !== "hidden") {
    formAndSave();
  }
};

function viewHomeButton() {
  if (formView.classList[2] !== "hidden") {
    homeAndForm();
  } else if (savedView.classList[2] !== "hidden") {
    homeAndSave();
  }
};

function formAndSave() {
  formView.classList.toggle("hidden");
  savedView.classList.toggle("hidden");
  formButton.classList.toggle("hidden");
  viewSavedButton.classList.toggle("hidden");
};

function homeAndForm() {
  homeView.classList.toggle("hidden");
  formView.classList.toggle("hidden");
  randomCoverButton.classList.toggle("hidden");
  saveCoverButton.classList.toggle("hidden");
  formButton.classList.toggle("hidden");
  homeButton.classList.toggle("hidden");
};

function homeAndSave() {
  homeView.classList.toggle("hidden");
  savedView.classList.toggle("hidden");
  randomCoverButton.classList.toggle("hidden");
  viewSavedButton.classList.toggle("hidden");
  homeButton.classList.toggle("hidden");
  saveCoverButton.classList.toggle("hidden");
};

function createBook() {
  event.preventDefault();
  var createCoverImg = document.querySelector("#cover").value;
  var createTitle = document.querySelector("#title").value;
  var createDescriptor1 = document.querySelector("#descriptor1").value;
  var createDescriptor2 = document.querySelector("#descriptor2").value;
  covers.push(createCoverImg);
  titles.push(createTitle);
  descriptors.push(createDescriptor1);
  descriptors.push(createDescriptor2);
  var createdCover = new Cover(createCoverImg, createTitle, createDescriptor1, createDescriptor2);
  coverImg.setAttribute("src", createCoverImg);
  coverTitle.innerText = createTitle;
  coverTaglineOne.innerText = createDescriptor1;
  coverTaglineTwo.innerText = createDescriptor2;
  homeAndForm();
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function displayCover() {
  var randomCoverImg = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomTaglineOne = descriptors[getRandomIndex(descriptors)];
  var randomTaglineTwo = descriptors[getRandomIndex(descriptors)];
  var currentCover = new Cover(randomCoverImg, randomTitle, randomTaglineOne, randomTaglineTwo);
  coverImg.setAttribute("src", randomCoverImg);
  coverTitle.innerText = randomTitle;
  coverTaglineOne.innerText = randomTaglineOne;
  coverTaglineTwo.innerText = randomTaglineTwo;
};
