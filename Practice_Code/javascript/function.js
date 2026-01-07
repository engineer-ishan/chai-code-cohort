let person1 = {
    name: "ishan",
    greet: function(){
        console.log(`Person name is ${this.name}`)
    }
}
person1.greet()
let person2 = {
    name: "hitesh"
}
person1.greet.call(person2)