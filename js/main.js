var changeColor = document.querySelector(".change-color");
var changeColorToBlue = function () {
  changeColor.classList.add("is-active");
};

changeColor.addEventListener("click", changeColorToBlue);
