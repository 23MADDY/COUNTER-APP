const counter = document.querySelector(".counter")


const newDiv = document.createElement("div")
newDiv.classList.add("all")
//creating number span
const number = document.createElement("span")
number.classList.add("number")
newDiv.appendChild(number)
number.textContent = 0
number.style.color = "blue"
// creating new div
const div2 = document.createElement("div")
div2.classList.add("div2")
newDiv.appendChild(div2)
// creating add button
 const button1 = document.createElement("button");
button1.classList.add("add")
div2.appendChild(button1)
button1.innerHTML = "ADD"

//creating subtract button

const button2 = document.createElement("button")
button2.classList.add("reset")
div2.appendChild(button2);
button2.textContent = "RESET"

// creating reset button

const button3 = document.createElement("button")
button3.classList.add("sub")
div2.appendChild(button3);
button3.textContent = "SUB"

counter.appendChild(newDiv)


const add = document.querySelector(".add")
const num = document.querySelector(".number");
//num.style.color = "blue"
const sub = document.querySelector(".sub")
const reset = document.querySelector(".reset")

add.addEventListener("click", function adding(event){
    //console.log(event.target)
    num.innerHTML ++;
    changingColor();
})

sub.addEventListener("click", function subtracting(event){
    //console.log(event.target)
    num.innerHTML --;
    changingColor()
})

reset.addEventListener("click", function reseting(event){
    //console.log(event.target)
    num.innerHTML = 0;
    changingColor()
})

function changingColor(){
    if(num.innerHTML <=  -1){
        num.style.color = "red"
    } else if(num.innerHTML == 0){
        num.style.color = "blue"
    }else if( num.innerHTML >= 1){
        num.style.color = "magenta"
    }
}


