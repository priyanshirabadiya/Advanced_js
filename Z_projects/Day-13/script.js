// const buttonEl = document.querySelector(".button");
// const backgroundEl = document.querySelector(".background");
// const imageEl = document.querySelector(".mk-logo");

// let currentMode = "light";

// const changeDarkMode = function () {
//   buttonEl.classList.add("dark-button");
//   backgroundEl.classList.add("dark-background");
//   currentMode = "dark";
// };
// const changeLightMode = function () {
//   buttonEl.classList.remove("dark-button");
//   backgroundEl.classList.remove("dark-background");
//   currentMode = "light";
// };

// buttonEl.addEventListener("click", () => {
//   if (currentMode === "light") {
//     changeDarkMode();
//   } else {
//     changeLightMode();
//   }
// }); 



let btn = document.querySelector('.btn');
let bg = document.querySelector('.main');

let currentMode = "dark"

let dark = () => {
    btn.classList.add('black-btn');
    bg.classList.add('bg-yellow');
    currentMode = "light";
}

let light = () => {
    btn.classList.remove('black-btn');
    bg.classList.remove('bg-yellow');
    currentMode = "dark"
}

btn.addEventListener("click", () => {
    if (currentMode == 'dark') {
        dark();
    }
    else{
        light();
    
    }
}
)
