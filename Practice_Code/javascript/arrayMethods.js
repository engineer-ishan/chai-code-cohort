// const arr = [1,2,3,4,5,6,7,8,9]

//  for of loop
// for(let element of arr)
//     console.log(element);
    
// for in loop
// for(let key in arr)
//     console.log(`${key}: ${arr[key]} of arr ${arr}`);
    
// forEach
// arr.forEach((item, index, arr)=>{
//     console.log(`${index}:- ${item} of array ${arr}`)
// })

// filter
// const newArr = arr.filter((element)=>{
//     return (element)
// })
// console.log(newArr);

// map
// const mapArr = arr.map((num)=>{
//     return num*10
// })
// console.log(mapArr);

// const arr = [1,2,3,4,5]
// const totalSum = arr.reduce((sum, item)=>{
//     sum = sum + item
//     return sum
// },0)
// console.log(totalSum);

// const names = ["ram", "shyam", "ram", "gopal", "ram","ishan"]

// const freq = names.reduce((obj, name) =>{
//     obj[name] = (obj[name] || 0) + 1
//     return obj
// },{})
// console.log(freq);

// let expenses = [
//   { title: "Tea", amount: 10, type: "food" },
//   { title: "Rice", amount: 50, type: "food" },
//   { title: "Internet", amount: 100, type: "utility" }
// ]
// let total = expenses.reduce((acc, expense)=>{
//     acc[expense.type] = (acc[expense.type] || 0) + expense.amount
//     return acc
// },{})
// console.log(total);

// let nums = [1,2,3]
// let squared = nums.reduce((acc, num) => {
//     acc.push(num*num)
//     return acc
// },[])
// console.log(squared);

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let evenItem = arr.reduce((acc, item)=>{
//     if(item%2==1)
//         acc.push(item)
//     return acc
// },[])
// console.log(evenItem);

