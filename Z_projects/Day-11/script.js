
// /*
// Qs. Create a new button element. Give it a text “click me”, background color of red & text color of white. Insert the button as the first element inside the body tag.
// */
const select = document.querySelector('body')
const create = document.createElement("button");
create.style.height = "10rem"
create.style.width = "20rem"
create.style.color = "white"
create.style.fontSize = "3rem"
create.innerHTML = "click here"
create.style.backgroundColor = "black"
create.addEventListener('click', () => {
  if (create.innerHTML === "click here") {
    create.innerHTML = 'mouse click';
    create.style.backgroundColor = "red";
  }
  else {
    create.innerHTML = "click here"
    create.style.backgroundColor = "black"
  }
})
select.appendChild(create)





// const select = document.querySelector("body");
// const create = document.createElement("button");
// create.innerText = "click here";
// create.style.height = "5rem";
// create.style.width = "10rem";
// create.style.backgroundColor = "red"
// create.style.cursor = "pointer"
// create.addEventListener("mouseleave", function() {
//     create.style.backgroundColor = "black";
//     create.style.color = "white";
//   });
// select.appendChild(create);


