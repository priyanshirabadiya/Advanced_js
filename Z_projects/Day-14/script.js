let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log(box);
    box.innerHTML = "A"
  })
})
