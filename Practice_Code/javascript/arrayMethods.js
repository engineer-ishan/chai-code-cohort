const arr = [1,2,3,4,5,6,7,8,9]

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
//     return (element%2==0)
// })
// console.log(newArr);

// map
const mapArr = arr.map((num)=>{
    return num*10
})
console.log(mapArr);
