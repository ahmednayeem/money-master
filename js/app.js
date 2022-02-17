function inputValue(id) {

    const input = document.getElementById(id);
    return input

}






// calculate handler
inputValue('calculate-button').addEventListener('click', function() {


    const incomeInput = inputValue('income-field');
    const incomeAmount = incomeInput.value;


    const foodInput = inputValue('food-input');
    const foodAmount = foodInput.value;


    const rentInput = inputValue('rent-input');
    const rentAmount = rentInput.value;

    const clothesInput = inputValue('clothes-input');
    const clothesAmount = clothesInput.value;

    const expenses = parseFloat(foodAmount) + parseFloat(rentAmount) + parseFloat(clothesAmount)


    const newExpenses = inputValue('total-cost')

    const totalBalance = inputValue('total-balance');
    // error
    if (expenses <= incomeAmount) {
        newExpenses.innerText = expenses;
        totalBalance.innerText = incomeAmount - expenses;


    } else {
        inputValue('expensence-error').innerText = 'expenses amount cannot be bigger than income'

    }






})


// save handler
inputValue('save-button').addEventListener('click', function() {

    const incomeInput = inputValue('income-field').value;
    const saveInput = inputValue('save-input').value;
    const balance = inputValue('total-balance').innerText;
    const calculate = saveInput / 100;
    const saving = incomeInput * calculate;
    const remainingBalance = balance - saving;

    // error handler
    if (balance >= saving) {
        inputValue('total-saving').innerText = saving;
        inputValue('total-remaining').innerText = remainingBalance;

    } else {

        inputValue('saving-error').innerText = 'saving amount cannot be bigger than balance'
    }





})