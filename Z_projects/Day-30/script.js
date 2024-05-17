let input = document.querySelector('.form-input');
let btn = document.querySelector('.button-generate');
let ind = "password";

const passwordgenrator = () => {
  ind = Math.random().toString(22).substring(2, 14).toUpperCase();
  replaceCharacters();
  return ind;
}

btn.addEventListener('click', () => {
  input.value = passwordgenrator();
});

const replaceCharacters = () => {
  ind = ind.replaceAll("0", "@");
  ind = ind.replaceAll("B", "?");
  ind = ind.replaceAll("A", "!");
  ind = ind.replaceAll("C", "%");
  ind = ind.replaceAll("G", "$");
  ind = ind.replaceAll("H", "{");
  ind = ind.replaceAll("4", "=");
  ind = ind.replaceAll("8", "*");
  ind = ind.replaceAll("6", "-");
  ind = ind.replaceAll("3", "#");
}

