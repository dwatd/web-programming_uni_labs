// proj9
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let changeColorButton = document.querySelector(".change-color");
let colorSpan = document.querySelector(".color");

changeColorButton.addEventListener("click", () => {
  let newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});
