const teas = {
    name: "lemon tea",
    type: "Green tea",
    caffeine: "low"
}
// console.log(`Name is ${teas.name} and type is ${teas.type}`);
teas.origin = "China"
teas.caffeine = "medium"

delete teas.type

let origin = teas.hasOwnProperty("origin")

// for(let key in teas){
//     console.log(`${key}: ${teas[key]}`)
// }

const myTeas = {
    greenTea: {
        name: "green Tea",
        color: "green"
    },
    blackTea: {
        name: "black tea",
        color: "black"
    }
}
const teaCopy = {...myTeas}
teaCopy.greenTea = "copied"

console.log(myTeas);
console.log(teaCopy); 

