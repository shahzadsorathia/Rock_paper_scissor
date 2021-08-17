// Main function of game
const maingame = () => {
    let ps = 0; //Player score
    let cs = 0; // computer score
    let turns = 0; //symbol turns 

    // child function 

    const startgame = () => {
        let rock = document.querySelector('.rock');
        let paper = document.querySelector('.paper');
        let scissor = document.querySelector('.scissor');
        let playerchoice = [rock, paper, scissor];
        let computer = ['rock', 'paper', 'scissor'];

    // function inside a function a start the game 
        playerchoice.forEach(choice => {
            choice.addeventlistener('click', function () {
                // statement to display the result of turns remaining
                turnsleft = document.querySelector('.turnsleft');
                // incrementing one after every play
                turns++;
                // subtracting every time  after each play and outputing remaining tunr
                turnsleft.innertext = `Turns Remaining: ${9 - turns}`;

                let x = math.floor(math.randon() * 3);
                let y = computer[x];

                // statement to verify the function and winner
                winner(this.innertext, x);

                // gameover function after 9 moves
                if (turns == 9) {
                    gameover(playerchoice, turnsleft)
                }

            })// choice braces
        })// playerchoice braces
    }// start game braces




}// main function braces
