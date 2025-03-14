// Coded by KaitHQ 2025 //

function calculateBudget() {
    let income = parseFloat(document.getElementById("income").value) || 0;
    let expenses = parseFloat(document.getElementById("expenses").value) || 0;
    let balance = income - expenses;

    let resultText = balance >= 0 
        ? `✅ You have $${balance.toFixed(2)} left.` 
        : `❌ You're over budget by $${Math.abs(balance).toFixed(2)}!`;

    document.getElementById("result").textContent = resultText;
}