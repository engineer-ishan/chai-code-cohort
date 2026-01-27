// const teas = {
//     name: "lemon tea",
//     type: "Green tea",
//     caffeine: "low"
// }
// console.log(`Name is ${teas.name} and type is ${teas.type}`);
// teas.origin = "China"
// teas.caffeine = "medium"

// delete teas.type

// let origin = teas.hasOwnProperty("origin")

// for(let key in teas){
//     console.log(`${key}: ${teas[key]}`)
// }

// const myTeas = {
//     greenTea: {
//         name: "green Tea",
//         color: "green"
//     },
//     blackTea: {
//         name: "black tea",
//         color: "black"
//     }
// }
// const teaCopy = {...myTeas}
// teaCopy.greenTea = "copied"

// console.log(myTeas);
// console.log(teaCopy); 

// function Person(fName, lName){
//     this.fName = fName
//     this.lName = lName
    
//     this.sayMyName = function(){
//         console.log(`My name is ${this.fName} ${this.lName}`)
//     }
// }
// const person1 = new Person("ishan", "chandrakar")
// const person2 = new Person("hitesh", "choudhary")
// person2.sayMyName()

let animal = {
    legs: 4,
    tail: true
}
let dog = Object.create(animal)
dog.bark = true

console.log(dog.__proto__);
