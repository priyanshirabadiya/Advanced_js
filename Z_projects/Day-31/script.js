const btn = document.querySelector(".button");
const input = document.querySelector(".form-input");
const result = document.querySelector(".result");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    checkvovel();
});

const checkvovel = () => {
    let count = 0;
    let text = input.value.toString();
    for (let i = 0; i < text.length; i++) {
        if (text[i].match(/[aeiouAEIOU]/)) {
            count++;
        }
    }
    result.innerHTML = "Vovels are : " + count;
}




