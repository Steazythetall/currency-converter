document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
    const data = await response.json();

    const tableBody = document.getElementById('cryptoTable').querySelector('tbody');
    
    data.forEach(coin => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${coin.name}</td>
            <td>$${coin.current_price}</td>
            
            <td>$${coin.market_cap}</td>
        `;
        tableBody.appendChild(row);
    });
});
