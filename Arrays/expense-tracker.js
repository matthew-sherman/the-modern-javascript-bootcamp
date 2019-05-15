const account = {
    name: 'Matthew Sherman',
    income: [],
    expenses: [],
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalIncome = 0
        let totalExpenses = 0
        let accountBalance = 0

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        accountBalance = totalIncome - totalExpenses;

        return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())