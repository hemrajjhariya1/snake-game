document.addEventListener('DOMContentLoaded', function(){

    const gameArena = document.getElementById("game-arena")
    const arenaSize = 600; 
    const cellSize = 20;
    let score = 0; // score of the game & let var changeble
    let gameStarted = false; // game status
    let food = {x: 300, y: 200}; // {x:15*20, y:10*20} -> cell coordinate -> pixels (1 cell ka size 20px ka isiliye jis position par food rakhenge usme 20 ka multiply karenge tan pixel me convert hoga aur browser pixcel hi samajhta hai)
    let snake = [{x:160, y:200}, {x:140, y:200}, {x:120, y:200}] 


    function initiatGame( ){

        const scroeBoard = document.createElement("div");
        scroeBoard.id= 'score-board';
        document.body.insertBefore(scroeBoard, gameArena); // insert score board Before gamearena

        const startButton = document.createElement('button');
        startButton.textContent = 'start Button';
        startButton.classList.add('start-button');

        document.body.appendChild(startButton); //append start button to the body

    }
    
    initiatGame();

});