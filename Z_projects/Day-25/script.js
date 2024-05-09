// function getExchangeRate() {
//     // Your code to fetch exchange rates from API and update the result
//     // Example:
//     // Fetch exchange rates from API
//     fetch('https://api.exchangerate-api.com/v4/latest/USD')
//         .then(response => response.json())
//         .then(data => {
//             const exchangeRate = data.rates.INR;
//             const amount = document.getElementById('amount-input').value;
//             const convertedAmount = amount * exchangeRate;
//             document.querySelector('.result').textContent = `${amount} USD = ${convertedAmount} INR`;
//         })
//         .catch(error => console.error('Error fetching exchange rate:', error));
// }




let btn1 = document.querySelector('.btn');
let btn2 = document.querySelector('.btn-1');

btn1.addEventListener('click' , () => {
    const amt = document.getElementById('taken-input').value;
    const convertedAmount = amt * 74.5; 
    document.getElementById('taken-input').value = convertedAmount + ' INR '; 
    console.log(convertedAmount);
})


btn2.addEventListener('click' , () => {
    const amt = document.getElementById('taken-input').value;
    const convertedAmount = amt / 74.5; 
    document.getElementById('taken-input').value = convertedAmount + ' INR '; 
    console.log(convertedAmount);
})










// function convertToINR() {
//     const amount = document.getElementById('amount-input').value;
//     const convertedAmount = amount * 74.5; // Assuming the conversion rate is 1 USD = 74.5 INR
//     alert(`${amount} USD = ${convertedAmount} INR`);
// }

// function convertToUSD() {
//     const amount = document.getElementById('amount-input').value;
//     const convertedAmount = amount / 74.5; // Assuming the conversion rate is 1 USD = 74.5 INR
//     alert(`${amount} INR = ${convertedAmount} USD`);
// }

