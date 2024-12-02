// proj5
let place = document.getElementById("place");
document.addEventListener("click", function (event) {
  if (place.contains(event.target)) {
    console.log(true);
  } else {
    console.log(false);
  }
});
