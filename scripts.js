
document.addEventListener('DOMContentLoaded', function() {
    const currencyFromSelect = document.getElementById('currency-from');
    const currencyToSelect = document.getElementById('currency-to');

    fetch('https://v6.exchangerate-api.com/v6/ad2306421a7fe8a1ed311ef6/latest/USD')
        .then(response => response.json())
        .then(data => {
            const currencies = Object.keys(data.conversion_rates);
            currencies.forEach(currency => {
                const optionFrom = document.createElement('option');
                optionFrom.value = currency;
                optionFrom.text = currency;
                currencyFromSelect.appendChild(optionFrom);

                const optionTo = document.createElement('option');
                optionTo.value = currency;
                optionTo.text = currency;
                currencyToSelect.appendChild(optionTo);
            });
        })
        .catch(error => console.error('Erro ao obter lista de moedas:', error));
});


document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = document.getElementById('amount').value;
    const currencyFrom = document.getElementById('currency-from').value;
    const currencyTo = document.getElementById('currency-to').value;

    
    fetch(`https://v6.exchangerate-api.com/v6/ad2306421a7fe8a1ed311ef6/latest/${currencyFrom}`)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.conversion_rates[currencyTo];
            const result = amount * exchangeRate;
            document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${currencyTo}`;
        })
        .catch(error => console.error('Erro ao obter taxa de câmbio:', error));
});



