(function() {

//selectors
let weeklyIncomeDisplay = document.querySelector('#weeklyIncomeDisplay');
let weeklyIncomeInput = document.querySelector('#weeklyIncomeInput');
let updateIncomeButton = document.querySelector('#updateIncomeButton');
let expenseDropdown = document.querySelector('#expenseDropdown');
let weeklyExpenseInput = document.querySelector('#weeklyExpenseInput');
let addExpenseButton = document.querySelector('#addExpenseButton');
let totalExpenseButton = document.querySelector('#totalExpenseButton');

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
let totalExpensesArray = [];
let totalExpenses = 0;
let totalAmount = 0;

//event listener on income button
updateIncomeButton.addEventListener('click', event => {
    event.preventDefault();

    //declaring weeklyIncome to be equal to the value of the input
    weeklyIncome = weeklyIncomeInput.value;

    //displaying 'Weekly Income:' and then value of the income
    weeklyIncomeDisplay.innerText = `Weekly Income: $${weeklyIncome}`;
});

//event listener on expense button
addExpenseButton.addEventListener('click', event => {
    event.preventDefault();

    //add variable to store input value
    let expense = {
        name: weeklyExpenseName.value,
        amount: weeklyExpenseInput.value
    };

    //event listener button to total all categories and expenses
totalExpenseButton.addEventListener('click', event => {
    event.preventDefault();

    totalExpensesArray.push(expense)
    for(let cost of totalExpensesArray){
        
    totalExpenses = totalAmount + parseInt(cost.amount)

    
    
    }
    console.log(totalExpenses);



    
    
    
});

    //create new element for the expense to display
    let newExpense = document.createElement('p');
    newExpense.innerText = `${expense.name}: $${expense.amount}`;
    expenseSection.append(newExpense);

    //add variable to determine selection
    let selection = parseInt(expenseDropdown.value);

    //add a class depending on selection
    if (selection === 4) {

        newExpense.classList.add('billsClass');
        console.log('this is setting to bills class')
    } else if (selection === 3) {
        
        newExpense.classList.add('foodClass');
    } else if (selection === 2) {

        newExpense.classList.add('clothingClass');
    } else if (selection === 1) {

        newExpense.classList.add('entertainmentClass');
    } else if (selection === 0) {

        newExpense.classList.add('miscClass');
    };
    
    
});

})();