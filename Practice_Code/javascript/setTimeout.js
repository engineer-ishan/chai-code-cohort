const obj = {
    name: "ishan",
    greet: function(){
        console.log(`Hello ${this.name}`)
    }
}
console.log('Hello');
setTimeout(obj.greet.bind(obj), 1000)
console.log('bye');
