// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newgamebtn = document.querySelector('#new-btn')
// let msgcontainer = document.querySelector('.msg-container')
// let msg = document.querySelector('#msg');

// let turnO = true;

// const winPattern = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

// const resetGame = () => {
//   turnO = true;
//   anablebox();
//   msgcontainer.classList.add('hide');
// }



// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     console.log("clicked");
//     if (turnO === true) {
//       box.innerHTML = "O";
//       turnO = false;
//     }
//     else {
//       box.innerHTML = "X";
//       turnO = true
//     }
//     box.disabled = true;

//     checkwinner();
//   })
// })

// const disbox = () => {
//   for (let box of boxes) {
//     box.disabled = true;
//   }
// }

// const anablebox = () => {
//   for (let box of boxes) {
//     box.disabled = false;
//     box.innerHTML = "";
//   }
// }
// const showwinner = (winner) => {
//   msg.innerHTML = `congratulations, winner is ${winner}`
//   msgcontainer.classList.remove('hide');
//   disbox();
// }


// const checkwinner = () => {
//   for (let pattern of winPattern) {
//     // console.log(pattern[0], pattern[1], pattern[2]);
//     let pos1 = boxes[pattern[0]].innerHTML;
//     let pos2 = boxes[pattern[1]].innerHTML;
//     let pos3 = boxes[pattern[2]].innerHTML;

//     if (pos1 != "" && pos2 != "" && pos3 != "") {
//       if (pos1 === pos2 && pos2 === pos3) {
//         console.log('winner', pos2);
//         showwinner(pos1);
//       }
//     }

//   }
// }

// resetBtn.addEventListener('click',resetGame)
// newgamebtn.addEventListener('click',resetGame)





const boxesEl = document.querySelectorAll(".box");
const resetBtnEl = document.querySelector("#reset-btn");
const newBtnEl = document.querySelector("#new-btn");
const messageDivEl = document.querySelector(".message-div");
const messageEl = document.querySelector(".message");

let turn0 = true;
let countClickedBtn = 0;

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
  box.addEventListener("click", () => {
    console.log("clicked");
    if (turn0 === true) {
      box.innerHTML = "O";
      turn0 = false;
    } else {
      box.innerHTML = "X";
      turn0 = true;
    }
    box.disabled = true;
    countClickedBtn++;
    console.log(countClickedBtn);
    checkWinner();
  });
});

function checkWinner() {
  for (let pattern of winPattern) {
    let pos1Val = boxesEl[pattern[0]].innerHTML;
    let pos2Val = boxesEl[pattern[1]].innerHTML;
    let pos3Val = boxesEl[pattern[2]].innerHTML;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      } else if (countClickedBtn === 9) {
        gameDraw();
      }
    }
  }
}

function gameDraw() {
  messageDivEl.classList.remove("hide");
  messageEl.innerHTML = `Oops! Draw Game again to Win`;
}

function showWinner(winner) {
  messageDivEl.classList.remove("hide");
  messageEl.innerHTML = `Congratulation! Player ${winner} is winner.`;
}

function enableBoxes() {
  for (let box of boxesEl) {
    box.disabled = false;
    box.innerHTML = "";
  }
}

function resetGame() {
  turn0 = true;
  enableBoxes();
  messageDivEl.classList.add("hide");
  messageEl.innerHTML = ``;
  countClickedBtn = 0;
}

resetBtnEl.addEventListener("click", resetGame);
newBtnEl.addEventListener("click", resetGame);