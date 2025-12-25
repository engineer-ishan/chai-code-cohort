let bgColor = 'white'
function changeBgBlack(){
    if(bgColor=='white'){
        document.body.style.backgroundColor = 'black'
        bgColor = 'black'
    }
    else if(bgColor=='black'){
        document.body.style.backgroundColor = 'white'
        bgColor = 'white'
    }
}
const changeBgButton = document.getElementById("changeBgButton")
changeBgButton.addEventListener('click',changeBgBlack)