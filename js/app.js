document.getElementById('calculate-button').addEventListener('click', function() {


    const incomeInput = document.getElementById('income-field');
    const incomeAmount = incomeInput.value;


    const foodInput = document.getElementById('food-input');
    const foodAmount = foodInput.value;


    const rentInput = document.getElementById('rent-input');
    const rentAmount = rentInput.value;

    const clothesInput = document.getElementById('clothes-input');
    const clothesAmount = clothesInput.value;

    const expenses = parseFloat(foodAmount) + parseFloat(rentAmount) + parseFloat(clothesAmount)

    const newExpenses = document.getElementById('total-cost')
    newExpenses.innerText = expenses;

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const updateTotalBalance = parseFloat(totalBalanceText);
    totalBalance.innerText = incomeAmount - expenses;


})