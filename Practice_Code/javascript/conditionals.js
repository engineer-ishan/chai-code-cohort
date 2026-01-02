let amount = 1000

function calculate(amount){
    if(amount>1000){
        return 0.9*amount
    }
    return amount
}
// console.log(calculate(amount));

function trafficLight(color){
    switch (color) {
        case "red":
            return "stop"
            break;
        case "yellow":
            return "bhaga bhai bhaga";
            break;
        case "green":
            return "jaao"
            break
        default:
            return "giver proper light"
            break;
    }
}
// console.log(trafficLight("yellow"));

function checkTruthy(value){
    if(value)
        console.log("Truthy");
    else
        console.log("Falsy");       
}
// checkTruthy([])
// checkTruthy({})
// checkTruthy(()=>{})

function login(username, password){
    if(username==="admin" && password==="123")
        console.log("login successfull");
    else 
        console.log("Invalid credentials");
}
// login("admin", "123")

let x = 6
if (x === 5 || 7 || 10 || 20) {
  console.log(x);
}
