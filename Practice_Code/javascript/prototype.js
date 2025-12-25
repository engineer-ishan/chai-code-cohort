Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`)
}

function greet(name){
    return `Hello ${name}`
}
// greet.describe()
// console.log(greet('ishan'));


function createCount(){
    let count = 0
    return function(){
        count++;
        return count
    }
}

console.log(createCount()());

