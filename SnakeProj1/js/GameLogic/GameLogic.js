/**
 * Created by Shane on 22/12/13.
 */


var GameLogic = new function(){
    var _ticker = null;
    var _currentLevel = levels.Standard;
    var _currentDirection = snakeDirections.Left;
    var _score = 0;

    this.getScore = function(){
        return _score;
    };

    this.setScore = function (value){
        _score = value;
    };

    this.incrementScore = function(){
        _score++;
    };

    this.getCurrentDirection = function(){
        return _currentDirection;
    };

    this.setCurrentDirection = function(newDirection){
        _currentDirection = newDirection;
    };

    this.initialize = function(){
        BoardManager.populate();
        //this.resetGame();

    };

    this.resetGame =function() {
        Snake.initialize();
        Food.refreshFood();
        _score = 0;

    }



//Game loop -  add to init func later
//Set movement interval for game loop
//setInterval(snakeMove, 200);
    this.gameLoop =function(){
        do
        {
            setInterval(this.iterate(), _currentLevel);
        } while(Snake.isAlive());
        this.stopGame();
    }





    this.isWall = function(top, left){
        if(top === 0 || top === 40) return false;
        else if(left === 0 || left ===40) return false;
        else return true;
    };


    this.stopGame = function(){
        $('#gameboard').hide;
        $('#gameover').show;
        var ans = confirm('Game Over, Try Again?');
        if (ans) {
            clearInterval(_ticker);
            $('#gameboard').show;
            $('#gameover').hide;
            resetGame();
        }
    };

    this.iterate = function(){
        Snake.move(_currentDirection);
        //rendering functions
    }







}();

