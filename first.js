const score={
    wins:0,
    losses:0,
    tie:0
};
function fun1(){
    let computerMove = '';
     const randomNumber = Math.random();
     if (randomNumber >= 0 && randomNumber < 1 / 3) {
         computerMove = 'rock';
     } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
         computerMove = 'paper';
     } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
         computerMove = 'scissors';
     }
     return computerMove;
 }
 function fun2(player){
     const computerMove = fun1();
     let result = '';
     if (player === 'scissors'){
         if (computerMove === 'rock') {
             result = 'You lose.';
         } else if (computerMove === 'paper') {
             result = 'You win.';
          } else if (computerMove === 'scissors') {
             result = 'Tie.';
            }
        }
        else if(player === 'rock'){
            if (computerMove === 'rock') {
                result = 'Tie.';
            } else if (computerMove === 'paper') {
                result = 'You lose.';
            } else if (computerMove === 'scissors') {
                result = 'You win.';
            }
        }
        else if(player === 'paper'){
            if (computerMove === 'rock') {
                result = 'You win.';
            } else if (computerMove === 'paper') {
                result = 'Tie.';
            } else if (computerMove === 'scissors') {
                result = 'You lose.';
            }

        }
        if(result==="You win."){
            score.wins=score.wins+1
        }
        else if(result==="You lose."){
            score.losses=score.losses+1;
        }
        else if(result==="Tie."){
            score.tie=score.tie+1
        }
        alert(`You picked ${player}. Computer picked ${computerMove}. ${result}.
        Wins: ${score.wins}  Losess:${score.losses}   Tie: ${score.tie}`);
        return result;
    }