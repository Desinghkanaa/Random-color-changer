


let hex = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e']

let btn = document.getElementById('btn');
let code = document.querySelector('p');
let containerBg = document.querySelector('.container');

btn.addEventListener('click',bgColor)

function bgColor(){
    let hexCode = "#"
    for(i=0; i<=5; i++){
        hexCode += randomNum()
    }
    code.innerHTML = hexCode
    containerBg.style.backgroundColor = hexCode
    
}





randomNum = () => {
    return hex[Math.floor(Math.random()*hex.length)]
}

let rnd = randomNum()
console.log(rnd)




/*
function randomNum(){
    rnd = Math.floor(Math.random()*16)
}
randomNum()
console.log(rnd)*/

