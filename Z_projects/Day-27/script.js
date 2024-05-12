const counterEl = document.querySelector(".counter");
const btn1 = document.querySelector(".btn-sub");
const resetbtn = document.querySelector(".btn-reset");
const btn2 = document.querySelector(".btn-add");

let counter = 0;

btn1.addEventListener("click", () => {
  counter++;
  counterEl.innerHTML = counter;
});

btn2.addEventListener("click", () => {
  counter--;
  counterEl.innerHTML = counter;
});

resetbtn.addEventListener("click", () => {
  counter = 0;
  counterEl.innerHTML = counter;
});

document.addEventListener("keyup", function (event) {
  if (event.keyCode == 37 || event.keyCode == 40) {
    counter--;
    counterEl.innerHTML = counter;
  } else if (event.keyCode == 38 || event.keyCode == 39) {
    counter++;
    counterEl.innerHTML = counter;
  } else if (event.keyCode == 32) {
    counter = 0;
    counterEl.innerHTML = counter;
  }
});
