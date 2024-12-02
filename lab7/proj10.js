// proj10
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let controls = document.querySelector("#controls");
let input = controls.querySelector("input");
let createButton = controls.querySelector("[data-create]");
let destroyButton = controls.querySelector("[data-destroy]");
let boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  boxesContainer.innerHTML = ""; // очищення попередніх елементів

  const boxElements = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    boxSize += 10;
    boxElements.push(box);
  }

  boxesContainer.append(...boxElements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
  let amount = parseInt(input.value, 10);
  createBoxes(amount);
  input.value = "";
});

destroyButton.addEventListener("click", destroyBoxes);
