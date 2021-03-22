const diceTriggerEl =  document.querySelector(".dice__trigger")

const imageEl = document.querySelector(".dice__image")

function getRandomNumber(){
    return 1 + Math.floor(Math.random() * 6);
}

function changeDice(){
    diceTriggerEl.addEventListener("click", function(){
    let   myRandomNum  = getRandomNumber();
        imageEl.src = "images/dice" + myRandomNum + ".png"
    })
}

changeDice()