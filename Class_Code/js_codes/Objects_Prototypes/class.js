class Person{
    constructor(fname, lname){
        this.fname = fname
        this.lname = lname
    }
    getFullName(){
        return `${this.fname} ${this.lname}`
    }
}
const p1 = new Person('piyus','garg')
const p2 = new Person('hitesh','choudhary')

console.log(p1.getFullName());
