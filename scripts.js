const playgame = () => {
    var sec=15,c=0
    let playerscore=0,computerscore=0
    const startbtn=document.querySelector('.startbtn')
    const blocks=document.querySelectorAll('.blocks')
    const message=document.querySelector('.messagesblock')
    startbtn.addEventListener('click',() =>{
        startbtn.classList.remove('reveal')
        startbtn.classList.add('hide')
        blocks.forEach(block => {
            block.classList.remove('hide')
            block.classList.add('reveal')
        })
        timer()
    })

    const playerhand=document.querySelector('.playerhand')
    const computerhand=document.querySelector('.computerhand')
    const buttons=document.querySelectorAll('.gamebtn')
    const hands=document.querySelectorAll('.hand img')
    const playerboard=document.querySelector('.scoreboard .player span')
    const computerboard=document.querySelector('.scoreboard .computer span')
    const time=document.querySelector('.timer span')
    hands.forEach(hand => {
        hand.addEventListener('animationend',()=>{
            hand.style.animation=""
        })
    })
    const computeroptions=['rock','paper','scissors']
    buttons.forEach( btn => {
        btn.addEventListener("click", () => {
            const text=btn.id
            const computerchoice=computeroptions[Math.floor(Math.random() * 3)]
            playerhand.style.animation="playerhandshake 1.5s ease"
            computerhand.style.animation="comphandshake 1.5s ease"
            setTimeout(() =>{
                checkhands(text,computerchoice)
                playerhand.src=`./assets/${text}.png`
                computerhand.src=`./assets/${computerchoice}.png`
            },1500)
        });
    })

    const timer = () =>{
        if(sec<0){
            clearTimeout(c)
            declarewinner()
        }
        else{
            time.innerHTML=sec;
            sec=sec-1;
            c=setTimeout(timer,1000)
        }
    }

    const checkhands = (player,computer) =>{
        if(player==computer){
            message.textContent="Game Tie"
        }
        else if(player=="rock"){
            if(computer=="scissors"){
                message.textContent="Player Wins!!!!"
                playerscore++
                updatescoreboard()
            }
            else{
                message.textContent="Computer Wins!!"
                computerscore++
                updatescoreboard()
            }
        }
        else if(player=="paper"){
            if(computer=="rock"){
                message.textContent="Player Wins!!!!"
                playerscore++
                updatescoreboard()
            }
            else{
                message.textContent="Computer Wins!!"
                computerscore++
                updatescoreboard()
            }
        }
        else if(player=="scissors"){
            if(computer=="paper"){
                message.textContent="Player Wins!!!!"
                playerscore++
                updatescoreboard()
            }
            else{
                message.textContent="Computer Wins!!"
                computerscore++
                updatescoreboard()
            }
        }
    }
    const updatescoreboard =() =>{
        playerboard.textContent=playerscore
        computerboard.textContent=computerscore
    }

    const declarewinner = () =>{
        const resultsdisplay=document.querySelector('.resultsdisplay')
        const container=document.querySelector('.container')
        container.style.opacity="0.3"
        container.style.pointerEvents="none"
        resultsdisplay.style.opacity=1

        let finalmessage=0

        if(playerscore>computerscore){
            finalmessage="Hurray!! you win the battle"
        }

        else if (computerscore>playerscore){
            finalmessage="You lose the match try again"
        }

        else{
            finalmessage="Game Tie"
        }

        document.querySelector('.finalmessage span').textContent=finalmessage

        document.querySelector('.resultsdisplay .computerresult span').textContent=computerscore

        document.querySelector('.resultsdisplay .playerresult span').textContent=playerscore

        const repalybutton =document.querySelector('.replaybtndiv button')
        repalybutton.addEventListener('click',() =>{
            location.reload()
        })
    }
}


playgame()