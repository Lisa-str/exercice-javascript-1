var yellowBox = document.querySelector(".change-color");

var changeColorToBlue = function () {
  yellowBox.classList.add("is-active");
};

yellowBox.addEventListener("click", changeColorToBlue);

// ----------

var orangeBox = document.querySelector(".toggle-color");

var toggleColorToRed = function () {
  orangeBox.classList.toggle("target");
};

orangeBox.addEventListener("click", toggleColorToRed);

// ----------

var violetBox = document.querySelector(".trigger");
var redBox = document.querySelector(".target");

var hideRedBox = function () {
  redBox.classList.toggle("is-hidden");
};

violetBox.addEventListener("click", hideRedBox);

// ----------

var greenBox = document.querySelector(".trigger-all");
var orangeBox = document.querySelector(".toggle-color");

var changeColorToRed = function () {
  orangeBox.classList.add("target");
};

greenBox.addEventListener("click", changeColorToRed);
greenBox.addEventListener("click", changeColorToBlue);

// ----------

var blueBox = document.querySelector(".trigger-all-self");
var changeColorToGreen = function () {
  blueBox.classList.add("green-box");
};
blueBox.addEventListener("click", changeColorToGreen);

var orangeBox = document.querySelector(".toggle-color");
var changeColorToRed = function () {
  orangeBox.classList.add("target");
};
blueBox.addEventListener("click", changeColorToRed);

var yellowBox = document.querySelector(".change-color");
var changeColorToBlue = function () {
  yellowBox.classList.add("is-active");
};
blueBox.addEventListener("click", changeColorToBlue);
