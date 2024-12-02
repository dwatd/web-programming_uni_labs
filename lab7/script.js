// proj1
function showMe() {
  let input = document.getElementById("show-me-input");
  let inputValue = document.getElementById("show-me-input").value;
  console.log(inputValue);
  input.value = "";
}

// proj3
let = originalValue = "";
function ShowOrHide() {
  let button = document.getElementById("showHideBtn");
  let input = document.getElementById("proj2-input");

  // початкове значення зберігається тільки один раз на початку
  if (originalValue === "") {
    originalValue = input.value;
  }
  // зміна значення в input
  if (button.value === "Приховати" && input.value !== originalValue) {
    originalValue = input.value;
  }

  if (button.value === "Приховати") {
    button.value = "Розкрити";
    input.value = "*".repeat(originalValue.length);
  } else {
    button.value = "Приховати";
    input.value = originalValue;
  }
}

// proj7
// список усіх елементів <li> з класом "item"
const categories = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("ul li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
});
