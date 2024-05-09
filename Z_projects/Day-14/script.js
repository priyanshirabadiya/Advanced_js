const boxesEl = document.querySelectorAll(".box");
const resetBtnEl = document.querySelector("#reset-btn");
const newBtnEl = document.querySelector("#new-btn");
const messageDivEl = document.querySelector(".message-div");
const messageEl = document.querySelector(".message");

let turn0 = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxesEl.forEach((box) => {
  box.addEventListener('click', () => {
    if (turn0 == true) {
      box.innerHTML = "O"
      turn0 = false;
    }
    else {
      box.innerHTML = "X"
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
    countClickedBtn++;
  })
})

const checkwinner = () => {
  var countClickedBtn = 0;
  for (let element of winPattern) {
    const [pos1, pos2, pos3] = element.map((index) => boxesEl[index].innerHTML);
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        Winnerplayer(pos1);
        return;
      }
      countClickedBtn++;
    }
  }

  if (countClickedBtn == 8) {
    notwinnerfun();
  }

}

newBtnEl.addEventListener('click', () => {
  messageDivEl.classList.add('hide');
  boxesEl.forEach((box) => {
    box.innerHTML = "";
    box.disabled = false;
  })
  turn0 = true;
})

resetBtnEl.addEventListener('click', () => {
  for (let element of boxesEl) {
    element.innerHTML = "";
    element.disabled = false
  }
  turn0 = true;
})

const Winnerplayer = (winner) => {
  messageDivEl.classList.remove('hide');
  messageEl.innerHTML = `Winner of the game is ${winner}.`;
}

const notwinnerfun = () => {
  messageDivEl.classList.remove('hide');
  messageEl.innerHTML = `No one win this game`;
}
