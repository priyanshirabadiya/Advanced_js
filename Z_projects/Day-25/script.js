// // function getExchangeRate() {
// //     // Your code to fetch exchange rates from API and update the result
// //     // Example:
// //     // Fetch exchange rates from API
// //     fetch('https://api.exchangerate-api.com/v4/latest/USD')
// //         .then(response => response.json())
// //         .then(data => {
// //             const exchangeRate = data.rates.INR;
// //             const amount = document.getElementById('amount-input').value;
// //             const convertedAmount = amount * exchangeRate;
// //             document.querySelector('.result').textContent = `${amount} USD = ${convertedAmount} INR`;
// //         })
// //         .catch(error => console.error('Error fetching exchange rate:', error));
// // }

const convertBtn = document.querySelector('.btn');
convertBtn.addEventListener('click', function () {
    const fromCurrency = document.getElementById('from-currency').value;               
    const toCurrency = document.getElementById('to-currency').value;
    console.log(fromCurrency);
    console.log(toCurrency);
    var amount = parseFloat(document.getElementById('taken-input').value);

    fetch('https://v6.exchangerate-api.com/v6/bce2bcc56227a2539d048940/latest/USD')
        .then(response => response.json())
        .then(data => {
            console.log(data.conversion_rates);
            const fromrates = data.conversion_rates[fromCurrency];
            const toform = data.conversion_rates[toCurrency];
            console.log(fromrates);
            console.log(toform);
            var answeris;
            if (fromrates > toform) {
                answeris = amount * toform / fromrates;
            } else {
                answeris = amount * toform * fromrates;
            }
            console.log(answeris);
           document.getElementById('taken-input').value = answeris; // Assigning the calculated value to the input field
        });
});


