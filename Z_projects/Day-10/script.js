const fline = document.querySelector('.secondary-heading');
const btn = document.querySelector('.append-btn')
 
let ftext = fline.innerHTML;
let btntext = btn.innerHTML;
let addtext = "priyanshi rabadiya"


btn.addEventListener('click',() => {
    clickftext = fline.innerHTML;
    if(ftext === clickftext)
    {
        fline.innerHTML = addtext;
        btn.innerHTML = "remove Text";
    }
    else{
        fline.innerHTML = ftext;
        btn.innerHTML = "Add text"
    }
})










// appendBtnEl.addEventListener("click", () => {
//   let newInnerHTML = heading2El.innerHTML;
//   if (newInnerHTML === innerText) {
//     heading2El.innerHTML = innerText.concat(appendText);
//     appendBtnEl.innerHTML = "Remove Text";
//   } else {
//     heading2El.innerHTML = innerText;
//     appendBtnEl.innerHTML = "Add Text";
//   }
// });

