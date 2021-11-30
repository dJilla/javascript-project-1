(function() {

//selectors
let weeklyIncomeDisplay = document.querySelector('#weeklyIncome');
let weeklyIncomeInput = document.querySelector('#weeklyIncomeInput');
let updateIncomeButton = document.querySelector('#updateIncomeButton');
let expenseDropdown = document.querySelector('#expenseDropdown');
let weeklyExpenseInput = document.querySelector('#weeklyExpenseInput');

//variables
let weeklyIncome = 0;
let billsExpenses = [];
let billsExpenseTotal = 0;
let foodExpenses = [];
let foodExpenseTotal = 0;
let clothingExpenses = [];
let clothingExpenseTotal = 0;
let entertainmentExpenses = [];
let entertainmentExpenseTotal = 0;
let miscExpenses = [];
let miscExpenseTotal = 0;
let balance = 0;

updateIncomeButton.addEventListener('click', event => {
    console.log('this is working')
    weeklyIncome = weeklyIncomeInput.value;
    weeklyIncomeDisplay.innerText = `Weekly Income: $${weeklyIncome};`
    event.preventDefault();
})

})();