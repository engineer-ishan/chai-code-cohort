const arr = [1,2,3,4,5,6,7,8,9,10]

// signature - No return, function input. Parameters - value, index
// calls my function for every value
// if(!Array.prototype.myForEach){
//     Array.prototype.myForEach = function(userFn){
        
//         for(let i=0; i<this.length; i++){
//             userFn(this[i],i)
//         }
//     }
// }
// arr.myForEach((value,index)=>{
//     console.log(`value at index ${index} is ${value}`)
// })

// map function
// signature - return new array, iterate over each element

// if(!Array.prototype.myMap){
//     Array.prototype.myMap = function(userFn){
//         const result = []
//         for(let i=0; i<this.length; i++){
//             const element = userFn(this[i],i, this)
//             result.push(element)
//         }
//         return result
//     }
// }

// let myMapArr = arr.myMap((value)=>value*2)
// console.log(myMapArr);

// filter functionn
// signature - return new array, input - userFn,

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn){
        const filterArray = []
        for(let i=0; i<this.length; i++){

            if(userFn(this[i]))
                filterArray.push(this[i])
        }
        return filterArray
    }
}

const myFilterArr = arr.myFilter((e)=> e%2==1 )
console.log(myFilterArr);
