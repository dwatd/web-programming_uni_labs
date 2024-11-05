// proj1
function makeTransaction() {
  let quantity = prompt("Enter the number of droids ordered: ");
  let pricePerDroid = prompt("Enter the cost of one droid: ");
  if (
    quantity === "0" ||
    pricePerDroid === "0" ||
    !quantity ||
    !pricePerDroid ||
    isNaN(quantity) ||
    isNaN(pricePerDroid)
  ) {
    alert("Please enter a valid number greater than zero!");
  } else {
    quantity = Number(quantity);
    pricePerDroid = Number(pricePerDroid);
    totalPrice = quantity * pricePerDroid;
    let msg = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    console.log(msg);
  }
}

// proj2
function checkForSpam(message) {
  message = prompt("Enter your message: ");
  let words = message.toLowerCase().split(" ");
  if (words.includes("spam") || words.includes("sale")) {
    console.log("Spam detected!");
    return true;
  } else {
    console.log("No spam detected.");
    return false;
  }
}

// proj3
function filterArray(numbers, value) {
  let result = [];

  numbers = prompt("Enter your array of numbers (comma separated): ")
    .split(",")
    .map(Number);
  value = Number(prompt("Enter your value: "));

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      result.push(numbers[i]);
    }
  }
  console.log(result);
}

//proj4
function proj4First(arr) {
  let result = [];
  let divisibleBy2 = [];
  let divisibleBy2And3 = [];
  let divisibleBy3 = [];

  arr = prompt("Enter your array of numbers (comma separated): ")
    .split(",")
    .map(Number);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] % 3 !== 0) {
      divisibleBy2.push(arr[i]);
    } else if (arr[i] % 2 === 0 && arr[i] % 3 === 0) {
      divisibleBy2And3.push(arr[i]);
    } else if (arr[i] % 3 === 0 && arr[i] % 2 !== 0) {
      divisibleBy3.push(arr[i]);
    }
  }

  result = [...divisibleBy2, ...divisibleBy2And3, ...divisibleBy3];

  console.log("Iput array:", arr);
  console.log("Output array:", result);
}

function proj4Second(arr) {
  // Отримуємо масив з prompt
  arr = prompt("Enter your array of numbers (comma separated):")
    .split(",")
    .map(Number);

  function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
      // Якщо поточний елемент менший за опорний
      if (arr[j] < pivot) {
        i++;
        // Обмін елементів
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    // Обмін опорного елемента
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1; // Повертаємо індекс розділу
  }

  function quickSort(arr, low, high) {
    if (low < high) {
      let pi = partition(arr, low, high);

      // Сортування окремих частин
      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
    }
  }

  console.log("Original array:", arr);
  quickSort(arr, 0, arr.length - 1);
  console.log("Sorted array:", arr);
}
