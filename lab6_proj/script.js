// proj1
function createProduct(obj, callback) {
  let product = { ...obj, id: Math.floor(Math.random() * 1000) + 1 };
  callback(product);
}

function logProduct(product) {
  console.log("Продукт:", product);
}

function logTotalPrice(product) {
  let totalPrice = product.price * product.quantity;
  console.log("Загальна вартість:", totalPrice);
}

function createAndLogProduct() {
  let productName = prompt("Введіть назву продукту: ");
  let productPrice = Number(prompt("Введіть ціну продукту: "));
  let productQuantity = Number(prompt("Введіть кількість продукту: "));
  let newProduct = {
    name: productName,
    price: productPrice,
    quantity: productQuantity,
  };

  createProduct(newProduct, logProduct);
  createProduct(newProduct, logTotalPrice);
}

//proj3
const medicines = {
  Агалгін: new Date("2022-05-01"),
  Ношпа: new Date("2025-07-02"),
  Альфахолін: new Date("2024-12-21"),
  Аспірин: new Date("2022-08-15"),
  Аспаркам: new Date("2024-04-18"),
};

// Функція для фільтрації, сортування та логування медикаментів
const logValidMedicines = () => {
  const currentDate = new Date();

  const validMedicines = Object.entries(medicines)
    .filter(([name, expirationDate]) => expirationDate > currentDate) // Фільтруємо за строком зберігання
    .sort(([, dateA], [, dateB]) => dateA - dateB) // Сортуємо за датою зберігання
    .map(([name]) => name); // Отримуємо лише назви препаратів

  console.log(validMedicines);
};

//proj5
const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

let resultFruits = [];

function createFruits(arr, discountCallback, idCallback) {
  return arr.map((fruit) => {
    let discountedFruit = discountCallback(fruit);
    let frutWithId = idCallback(discountedFruit);
    return frutWithId;
  });
}

function discount(fruit) {
  return {
    ...fruit,
    price: fruit.price * 0.8,
  };
}
function addId(fruit) {
  return {
    ...fruit,
    id: Math.floor(Math.random() * 1000) + 1,
  };
}

function logFruits() {
  resultFruits = createFruits(fruits, discount, addId);

  resultFruits.forEach((fruit) => {
    console.log(`name: ${fruit.name}, price: ${fruit.price}, ID: ${fruit.id}`);
  });
}

//proj7
// Клас Client з приватними властивостями
class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  // Геттер для login
  get login() {
    return this.#login;
  }

  // Сеттер для login
  set login(newLogin) {
    if (typeof newLogin === "string" && newLogin.length > 0) {
      this.#login = newLogin;
    } else {
      console.error("Неправильне значення для login");
    }
  }

  // Геттер для email
  get email() {
    return this.#email;
  }

  // Сеттер для email
  set email(newEmail) {
    if (typeof newEmail === "string" && newEmail.includes("@")) {
      this.#email = newEmail;
    } else {
      console.error("Неправильне значення для email");
    }
  }
}

// Функція для створення екземпляра Client і виведення даних у консоль
function logClientClass() {
  // Запитуємо логін і email через prompt
  const login = prompt("Введіть логін:");
  const email = prompt("Введіть email:");

  // Створюємо об'єкт Client з введеними даними
  const client = new Client(login, email);

  // Виводимо значення у консоль
  console.log("Login:", client.login);
  console.log("Email:", client.email);
}

//proj10
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Функція для підрахунку кількості кожного тегу
function countTags(tweetsArray) {
  return tweetsArray.reduce(function (accumulator, tweet) {
    tweet.tags.forEach(function (tag) {
      // Якщо тег вже є в об'єкті, збільшуємо його значення на 1, інакше додаємо його з початковим значенням 1
      if (accumulator[tag]) {
        accumulator[tag] += 1;
      } else {
        accumulator[tag] = 1;
      }
    });
    return accumulator;
  }, {});
}

// Функція для виклику countTags і виведення результату в консоль
function logTagCount() {
  const tagCounts = countTags(tweets);
  console.log(tagCounts);
}

//proj10
function checkBrackets(str) {
  // Ініціалізація стеку для зберігання відкритих дужок
  const stack = [];
  // Об'єкт з відповідностями відкритих та закритих дужок
  const brackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  // Прохід по кожному символу рядка
  for (let char of str) {
    // Якщо символ - відкрита дужка, додаємо його до стеку
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    }
    // Якщо символ - закрита дужка, перевіряємо відповідність верхньому елементу стеку
    else if (char === ")" || char === "]" || char === "}") {
      // Якщо стек порожній або немає відповідної відкритої дужки, повертаємо false
      if (stack.length === 0 || stack.pop() !== brackets[char]) {
        return false;
      }
    }
  }

  // Повертаємо true, якщо всі дужки збалансовані, інакше - false
  return stack.length === 0;
}

// Функція для запиту рядка через prompt і виведення результату
function logBracketCheck() {
  const userInput = prompt("Введіть рядок для перевірки:");
  const result = checkBrackets(userInput);

  if (result) {
    console.log("Код правильний: усі дужки закриті.");
  } else {
    console.log("Код містить помилку: є незакриті дужки.");
  }
}
