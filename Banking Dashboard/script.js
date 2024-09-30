let balance = 1000;

document.getElementById('depositButton').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('depositAmount').value);
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateBalance();
        document.getElementById('depositAmount').value = ''; // Clear input
    } else {
        alert('Please enter a valid deposit amount.');
    }
});

document.getElementById('withdrawButton').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('withdrawAmount').value);
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
        document.getElementById('withdrawAmount').value = ''; // Clear input
    } else {
        alert('Invalid withdrawal amount or insufficient funds.');
    }
});

function updateBalance() {
    document.getElementById('balanceAmount').innerText = `$${balance.toFixed(2)}`;
}
