let salesData = [
    {product: "laptop", price: 1200},
    {product: "monitor", price: 800},
    {product: "mouse", price: 150},
    {product: "keyboard", price: 80}
]
let total = salesData.reduce((acc, sale) => (acc+ sale.price),0)
// console.log(total);

let inventory = [
    {name: "Widget A", stock: 30},
    {name: "Widget B", stock: 120},
    {name: "Widget C", stock: 45},
    {name: "Widget D", stock: 70}
]

let lowStockItems = inventory.filter((item) => (item.stock<50))
// console.log(lowStockItems);

let userActivity = [
    {user: "Alice", activityCount: 45},
    {user: "Bob", activityCount: 30},
    {user: "Charlie", activityCount: 75}
]
let maxActivity = userActivity.reduce((maxUser, user) =>
    user.activityCount > maxUser.activityCount ? user : maxUser    
)

// console.log(maxActivity);

let expenses = [
    {description: "Groceries", amount: 50, category: "food"},
    {description: "Electricity bill", amount: 100, category: "utilities"},
    {description: "Dinner", amount: 30, category: "food"},
    {description: "Internet bill", amount: 50, category: "utilities"},
]

let expenseReport = expenses.reduce((report, expense) => {
    report[expense.category] = (report[expense.category] || 0) + expense.amount
    return report
},{})
console.log(expenseReport);
