// proj8
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // зупинка перевантаження сторінки

  const email = document.querySelector("input[name='email']").value.trim();
  const password = document
    .querySelector("input[name='password']")
    .value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email,
    password,
  };
  console.log(formData);

  loginForm.reset();
});
