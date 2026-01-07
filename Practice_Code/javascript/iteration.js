let salesData = [
  { product: "laptop", price: 1200 },
  { product: "monitor", price: 800 },
  { product: "mouse", price: 150 },
  { product: "keyboard", price: 80 },
];
let total = salesData.reduce((acc, sale) => acc + sale.price, 0);
// console.log(total);

let inventory = [
  { name: "Widget A", stock: 30 },
  { name: "Widget B", stock: 120 },
  { name: "Widget C", stock: 45 },
  { name: "Widget D", stock: 70 },
];

let lowStockItems = inventory.filter((item) => item.stock < 50);
// console.log(lowStockItems);

let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 30 },
  { user: "Charlie", activityCount: 75 },
];
let maxActivity = userActivity.reduce((maxUser, user) =>
  user.activityCount > maxUser.activityCount ? user : maxUser
);

// console.log(maxActivity);

let expenses = [
  { description: "Groceries", amount: 50, category: "food" },
  { description: "Electricity bill", amount: 100, category: "utilities" },
  { description: "Dinner", amount: 30, category: "food" },
  { description: "Internet bill", amount: 50, category: "utilities" },
];

let totalExpense = expenses.reduce((acc, expense) => {
  acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
  return acc;
}, {});
// console.log(totalExpense);

let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

let unfinishedTask = tasks
    .filter((task) => {
        return !task.completed;
    })
    .sort((a,b) => a.priority - b.priority)
// console.log(unfinishedTask);

let movieRating = [
    {title: "Movie A", ratings: [4,5,3]},
    {title: "Movie B", ratings: [5,5,4]},
    {title: "Movie C", ratings: [3,4,2]}
]
let averageRating = movieRating.map((movie)=>{
    const sum = movie.ratings.reduce((total, rate)=>{
        return total + rate
    },0)
    const avg = sum / movie.ratings.length;

    movie.ratings = avg.toFixed(2)
    return movie
})
// console.log(averageRating);
// console.log(movieRating);


