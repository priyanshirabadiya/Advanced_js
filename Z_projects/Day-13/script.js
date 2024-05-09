const bodymain = document.querySelector('body')
const btnlight = document.querySelector('.whitebtn')
let currenmode = 'light'

const changedarkmode = () => {
    bodymain.style.backgroundColor = "black";
    btnlight.classList.add('.dark-button');
    currenmode = "dark"
}

const changewhitemode = () => {
    bodymain.style.backgroundColor = "white";
    btnlight.classList.remove('.dark-button');
    currenmode = "light"
}

btnlight.addEventListener('click',() => {
    if(currenmode === 'light'){
        changedarkmode();
    }
    else{
        changewhitemode();
    }
})

