
// 1. Create an object literal called _personAccount_. It has _firstName, lastName, incomes, expenses_ properties and it has _totalIncome, totalExpense, accountInfo,addIncome, addExpense_ and _accountBalance_ methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
    firstName: 'Cris',
    lastName: 'Bagotsay',
    incomes: [{type: 'work', amount: 1000}, {type: 'passive', amount: 200}],
    expenses: [{type: 'food', amount: 500}, {type: 'rent', amount: 100}, {type: 'transportation', amount: 50}],
    addExpense: function(expenseName, expenseAmount) {
        this.expenses.push({[expenseName]: expenseAmount});
    },
    accountBalance: function() {
        const totalIncome = this.incomes.reduce((acc, curr) => acc + curr.amount, 0);
        const totalExpense = this.expenses.reduce((acc, curr) => acc + curr.amount, 0);
        return totalIncome - totalExpense;
    }
}

