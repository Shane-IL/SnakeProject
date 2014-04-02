/**
 * Created by Shane on 22/12/13.
 */


var GameLogic = new function(){

    var _this = this;
    //Create the game variables
    var ticker = null;

    var currentLevel = levels.Standard;



    _this.initialize = function(){
        BoardManager.populate();

    };


//Init function
    function resetGame() {
        Snake.initialize();
        Food.refreshFood();
        GlobalVariables.score = 0;
        //rendering
        gameLoop();
    }



//Game loop -  add to init func later
//Set movement interval for game loop
//setInterval(snakeMove, 200);
    function gameLoop(){
        do
        {
            setInterval(iterate(), currentLevel);
        } while(Snake.isAlive());
        _this.stopGame();
    }





    _this.isWall = function(top, left){
        if(top === 0 || top === 40) return false;
        else if(left === 0 || left ===40) return false;
        else return true;
    };


    _this.stopGame = function(){
        $('#gameboard').hide;
        $('#gameover').show;
        var ans = confirm('Game Over, Try Again?');
        if (ans) {
            clearInterval(ticker);
            $('#gameboard').show;
            $('#gameover').hide;
            resetGame();
        }
    }

    var iterate = function(){
        Snake.move(GlobalVariables.currentDirection);
        //rendering functions
    }







}();

