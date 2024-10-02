document.getElementById('investment-form').addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('investment-name').value;
    const amount = parseFloat(document.getElementById('investment-amount').value);
    const value = parseFloat(document.getElementById('investment-value').value);
    const quantity = parseFloat(document.getElementById('quantity').value);

    addInvestment(name, amount, value, quantity);

    //clear investment form
    document.getElementById('investment-form').reset();
});

let totalPortfolioValue = 0;
function addInvestment(name, amount, value, quantity){
    const tbody = document.getElementById('investment-table').querySelector('tbody');
    const row = document.createElement('tr');

    const gainLoss = value - amount;
    totalPortfolioValue += value;

    row.innerHTML = `
    <td> ${name} </td>
    <td> $${amount.toFixed(2)}</td>
    <td> $${value.toFixed(2)}</td>
    <td> ${quantity}</td>
    <td> $${gainLoss.toFixed(2)}</td>
    `;

    tbody.appendChild(row);
    updateTotalValue();
}

function updateTotalValue(){
    document.getElementById('total-value').innerText = `Total Portfolio Value : $${totalPortfolioValue.toFixed(2)}`;
}