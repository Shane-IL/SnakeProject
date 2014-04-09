/**
 * Created by Shane on 22/12/13.
 */


var GameLogic = new function(){
    var ticker;
    var _currentLevel = Global.Levels.Standard;
    var _currentDirection = Global.SnakeDirections.Left;
    var _score = 0;
    var _this = this;

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
        BoardManager.initialize();
    };

    this.run = function(){
        BoardManager.populateBoard();

    }

    this.resetGame =function() {
        Snake.refreshSnake();
        Food.refreshFood();
        _score = 0;
        this.gameLoop();

    }



//Game loop -  add to init func later
//Set movement interval for game loop
//setInterval(snakeMove, 200);
    this.gameLoop =function(){
           ticker =  setInterval(function(){_this.iterate()}, 200);
    };





    this.isWall = function(position){
        if(position.top <= 0 || position.top >= 40) return true;
        else if(position.left <= 0 || position.left >=40) return true;
        else return false;
    };

//fix
    this.stopGame = function(){

        $('#gameboard').hide;
        $('#gameover').show;
        var ans = confirm('Game Over, Try Again?');
        if (ans) {

            $('#gameboard').show;
            $('#gameover').hide;
            this.resetGame();
        }
    };

    this.iterate = function(){
        Snake.move(_currentDirection);
        InputManager.listen();
        if(!Snake.isAlive()){
            clearInterval(ticker);
            _this.stopGame();
        };
    }







}();

