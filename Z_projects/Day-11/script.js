
// /*
// Qs. Create a new button element. Give it a text “click me”, background color of red & text color of white. Insert the button as the first element inside the body tag.
// */


const select = document.querySelector("body");
const create = document.createElement("button");
create.innerText = "click here";
create.style.height = "5rem";
create.style.width = "10rem";
create.style.backgroundColor = "red"
create.style.cursor = "pointer"
create.addEventListener("mouseleave", function() {
    create.style.backgroundColor = "black";
    create.style.color = "white";
  });
select.appendChild(create);


