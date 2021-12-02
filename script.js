(function () {
  //selectors
  let weeklyIncomeDisplay = document.querySelector("#weeklyIncomeDisplay");
  let weeklyIncomeInput = document.querySelector("#weeklyIncomeInput");
  let updateIncomeButton = document.querySelector("#updateIncomeButton");
  let expenseDropdown = document.querySelector("#expenseDropdown");
  let weeklyExpenseInput = document.querySelector("#weeklyExpenseInput");
  let addExpenseButton = document.querySelector("#addExpenseButton");
  let totalExpenseButton = document.querySelector("#totalExpenseButton");
  //variables
  let weeklyIncome = 0;
  let billsExpenses = 0;
  let foodExpenses = 0;
  let clothingExpenses = 0;
  let entertainmentExpenses = 0;
  let miscExpenses = 0;
  let balance = 0;
  let totalExpenses = 0;
  //event listener on income button
  updateIncomeButton.addEventListener("click", (event) => {
    event.preventDefault();
    //declaring weeklyIncome to be equal to the value of the input
    weeklyIncome = weeklyIncomeInput.value;
    //displaying 'Weekly Income:' and then value of the income
    weeklyIncomeDisplay.innerText = `Weekly Income: $${weeklyIncome}`;
  });
  //event listener on expense button
  addExpenseButton.addEventListener("click", (event) => {
    event.preventDefault();
    //add variable to store input value
    let expenseName = weeklyExpenseName.value;
    let expenseAmount = parseInt(weeklyExpenseInput.value);
    let expense = {
      name: expenseName,
      amount: expenseAmount,
    };
    //create new element for the expense to display
    let newExpense = document.createElement("p");
    newExpense.innerText = `${expense.name}: $${expense.amount}`;
    expenseSection.append(newExpense);
    //add variable to determine selection
    let selection = parseInt(expenseDropdown.value);
    //add a class depending on selection
    if (selection === 4) {
      newExpense.classList.add("billsClass");
      console.log("this is setting to bills class");
    } else if (selection === 3) {
      newExpense.classList.add("foodClass");
    } else if (selection === 2) {
      newExpense.classList.add("clothingClass");
    } else if (selection === 1) {
      newExpense.classList.add("entertainmentClass");
    } else if (selection === 0) {
      newExpense.classList.add("miscClass");
    }
    let sumTotal = () => {
      totalExpenses += expenseAmount;
    };
    sumTotal();
    console.log(totalExpenses);
    let sumBills = () => {
      if (newExpense.classList.contains("billsClass")) {
        return (billsExpenses += expenseAmount);
      }
    };
    sumBills();
    let sumFood = () => {
      if (newExpense.classList.contains("foodClass")) {
        return (foodExpenses += expenseAmount);
      }
    };
    sumFood();
    let sumClothing = () => {
      if (newExpense.classList.contains("clothingClass")) {
        return (clothingExpenses += expenseAmount);
      }
    };
    sumClothing();
    let sumEntertainment = () => {
      if (newExpense.classList.contains("entertainmentClass")) {
        return (entertainmentExpenses += expenseAmount);
      }
    };
    sumEntertainment();
    let sumMisc = () => {
      if (newExpense.classList.contains("miscClass")) {
        return (miscExpenses += expenseAmount);
      }
    };
    sumMisc();
    //pie chart
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      let data = google.visualization.arrayToDataTable([
        ["Expense", "$"],
        ["Bills", billsExpenses],
        ["Food", foodExpenses],
        ["Clothing", clothingExpenses],
        ["Entertainment", entertainmentExpenses],
        ["Miscellaneous.", miscExpenses],
      ]);
      let options = {
        title: "Overall Spending",
        is3D: true,
      };
      let chart = new google.visualization.PieChart(
        document.getElementById("piechart")
      );
      chart.draw(data, options);
    }
  });
})();
