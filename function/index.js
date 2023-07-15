const roll = document.querySelector("button")


roll.addEventListener("click", rollDice)
function rollDice(){
    const rbn = Math.floor(Math.random() * 6) + 1;
    const throw1 = "images/dice" + rbn + ".png";
    const first = document.querySelectorAll("img")[0];
    first.setAttribute("src", throw1);


    const rdn = Math.floor(Math.random() * 6) + 1;
    const throw2 =  "images/dice" + rdn + ".png";
    const second = document.querySelectorAll("img")[1];
    second.setAttribute("src", throw2);

if(rbn === rdn){
        document.querySelector("h2").innerHTML = "Draw"
    }else if(rbn > rdn){
        document.querySelector("h2").innerHTML = "Player 1 Wins"
    }else if(rbn < rdn){
        document.querySelector("h2").innerHTML = "Player 2 Wins"
    }
}