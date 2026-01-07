// const user = {
    //     name: "Ishan",
    //     age: 25,
    //     password: "123"
    // }
    // const proxyUser = new Proxy(user,{
        //     get(target, property){
            //         // target is whole object and property is the keys of that object
            //         if(property==="password")
//             throw new Error("Access denied")
            //         return target[property]
//     }
// })
// console.log(proxyUser.name);
//  console.log(proxyUser.age);
// console.log(proxyUser.password);



// function negativeIndex(arr, index){
//     if(index<0){
//         return arr[arr.length+index]
//     }
//     else
//         return arr[index]
// }
// console.log(negativeIndex(arr,-2));
function negativeIndex(arr){
    return new Proxy(arr, {
        get(target, prop){
            const index = Number(prop)
            if(index<0)
                return target[target.length+index]
            return target[index]
        },
        set(target, prop, value){
            const index = Number(prop)
            const newValue = Number(value)
            if(index<0)
                target[target.length+index] = newValue
            else
                target[index] = newValue
            return true // true message indicating value has ben set
        }
    })
}
let arr = [1,2,3,4,5,6,7,8,9]
let proxyArray = negativeIndex(arr)
proxyArray[-3]=3
console.log(arr);
console.log(proxyArray);
