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
/*Напиши клас Client який створює об'єкт з ​​властивостями login email
Оголоси приватні властивості #login #email,
доступ до яких зроби через геттер та сеттер login email*/
