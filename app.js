// Main function of game
const maingame = () => {
    let psd = 0; //Player score display
    let csd = 0; // computer score display 
    let turns = 0; //symbol turns display

    // child function 

    const startgame = () => {
        let rock = document.querySelector('.rock');
        let paper = document.querySelector('.paper');
        let scissor = document.querySelector('.scissor');
        let playerchoice = [rock, paper, scissor];
        let computerchoice = ['rock', 'paper', 'scissor'];

        // function inside a function a start the game 
        playerchoice.forEach(choice => {
            choice.addEventListener('click', function () {
                // statement to display the result of turns remaining
                let turnsleft = document.querySelector('.turnsleft');
                // incrementing one after every play
                turns++;
                // subtracting every time  after each play and outputing remaining turns
                turnsleft.innerText = `Turns Remaining: ${9 - turns}`;

                let x = Math.floor(Math.random() * 3);
                let y = computerchoice[x];

                // statement to verify the function and winner
                winner(this.innerText, y);

                // gameover function after 9 moves
                if (turns == 9) {
                    replaygame(playerchoice, turnsleft)
                }
            })// choice braces
        })// playerchoice braces
    }// start game braces

    // function to check winner
    const winner = (player, computer) => {
        let result = document.querySelector('.results');
        // psb = player score board
        let psb = document.querySelector('.p-score');
        // csc = computer score board
        let csb = document.querySelector('.c-score');
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        // Conditional statement to verify the inputs 
        if (player === computer) {
            result.textContent = " Tie..!!!"
        }
        else if (player == 'rock') {
            if (computer == 'paper') {
                result.textContent = 'Player Lost';
                csd++; // displaying increment in computer's score 
                csb.textContent = csd;
            }
            else {
                result.textContent = 'Player Won';
                psd++; //displaying increment in player's score
                psb.textContent = psd;
            }
        }
        else if (player == 'scissor') {
            if (computer == 'rock') {
                result.textContent = 'Player Lost';
                csd++; // displaying increment in computer's score 
                csb.textContent = csd;
            }
            else {
                result.textContent = 'Player Won '
                psd++; //displaying increment in player's score
                psb.textContent = psd;
            }
        }
        else if (player == 'paper') {
            if (computer == 'scissor') {
                result.textContent = 'Player Lost';
                csd++; // displaying increment in computer's score 
                csb.textContent = csd;
            }
            else {
                result.textContent = 'Player Won '
                psd++; //displaying increment in player's score
                psb.textContent = psd;
            }
        }
    } // winner function braces

    const replaygame = (playerchoice, turnsleft) => {
        let chooseTurn = document.querySelector('.choose');
        let result = document.querySelector('.results');
        let restartbutton = document.querySelector('.restart');

        playerchoice.forEach(choice => {
            choice.style.display = 'none';
        })
        chooseTurn.innerText = 'Game Over!'
        turnsleft.style.display = 'none';
        result.style.display='none';

        //Restart Button style
        restartbutton.innerText = 'Try Again?';
        restartbutton.style.display = 'grid';
        // restart button call function
        restartbutton.addEventListener('click', () => {
            window.location.reload();
        })


    }// replaygame braces


    startgame();

}// main function braces


maingame();