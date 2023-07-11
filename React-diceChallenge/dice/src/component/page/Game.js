import React from 'react'
import style from "./Game.module.css"


function Game() {


    const rollDice = () =>{
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

  return (
    <div className={style.gameWrapper}>
        <div className={style.container}>
            <header>
                <h1>Let's Play a Game</h1>
                <h2>Goodluck</h2>
                <div>
                    <button type='button' onClick={rollDice}>Roll Dice</button>
                </div>
            </header>
            <main>
                <div className={style.dice}>
                    <p>Player 1</p>
                    <img class={style.img1} src="images/dice6.png" alt='dice' />
                </div>

                <div className={style.dice}>
                    <p>Player 2</p>
                    <img className={style.img2} src="images/dice6.png" alt='dice'/>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Game