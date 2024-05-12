const input = document.querySelector('#text-input');
const btn = document.querySelector('.button')
const result = document.querySelector('.result')

btn.addEventListener('click' , (e) => {
    e.preventDefault();

    let value = input.value;
    let value2 = input.value.toString().toUpperCase();
    let rev = value2.split('').reverse().join('');

    if(value2 === rev){
        result.innerHTML = `${value} Text is Palindrome`
    }
    else
    {
        result.innerHTML = `${value} Text is not Palindrome`
    }

})