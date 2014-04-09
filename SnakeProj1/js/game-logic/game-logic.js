/**
 * Created by Shane on 22/12/13.
 */


var GameLogic = new function(){
    var ticker;
    var _currentLevel = Global.Levels.Standard;
    var _currentDirection = Global.SnakeDirections.Left;
    var _score = 0;
    var _this = this;
    var _speed = 400;

    this.getScore = function(){
        return _score;
    };

    this.setScore = function (value){
        _score = value;
    };

    this.getSpeed = function(){
      return _speed;
    };

    this.setSpeed = function(speed){
        _speed = speed
    };

    this.incrementSpeed = function(increment){
        console.log(increment)
        if(_speed <= 6000 && _speed >= 100){
            _speed+=increment;
            clearInterval(ticker);
            ticker =  setInterval(function(){_this.iterate()}, _speed);
        }
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
        MasterControls.listen();
    };

    this.resetGame =function() {
        _this.setSpeed(400);
        Snake.refreshSnake();
        Food.refreshFood();
        _score = 0;
        this.gameLoop();

    }



//Game loop -  add to init func later
//Set movement interval for game loop

    this.gameLoop =function(){
           ticker =  setInterval(function(){_this.iterate()}, _speed);
    };





    this.isWall = function(position){
        if(position.top < 0 || position.top > 39) return true;
        else if(position.left < 0 || position.left >39) return true;
        else return false;
    };

//fix
    this.stopGame = function() {
        console.log("stopped");
        clearInterval(ticker);
        $('#gameboard').hide;
        $('#gameover').show;
        var ans = confirm('Game Over, Try Again?');
        if (ans) {
            $('#gameboard').show;
            $('#gameover').hide;
            this.resetGame();
        }
        else clearInterval(ticker);
    }

    this.iterate = function(){
        console.log("one iteration, speed: "+_speed);
        Snake.hasEaten();
        ScreenButtonManager.listen();
        MoveButtonManager.listen();
        $('#speedStatus').html(_speed);
        if(!Snake.isAlive()){
            _this.stopGame();
        };
        Snake.move(_currentDirection);

    }







}();

