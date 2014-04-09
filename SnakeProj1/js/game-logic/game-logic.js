/**
 * Created by Shane on 22/12/13.
 */


var GameLogic = new function(){
    var ticker;
    var _currentLevel = Global.Levels.Standard;
    var _currentDirection = Global.SnakeDirections.Left;
    var _score = 0;
    var _this = this;
    var _speed = 200;
    var _dirChanges;

    this.getChanges = function(){
        return _dirChanges;
    };
    this.incrementChanges = function(){
        _dirChanges++;
    };

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
        if(_speed < 6000 && _speed >= 50){
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
        clearInterval(ticker);
        _this.setSpeed(200);
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
        if(position.top < 0 || position.top > Global.Constants.GridHeight-1) return true;
        else if(position.left < 0 || position.left >Global.Constants.GridWidth-1) return true;
        else return false;
    };

//fix
    this.stopGame = function() {
        console.log("stopped");
        clearInterval(ticker);
        var ans = confirm('Game Over, Try Again?');
        if (ans) {
            this.resetGame();
        }

    }

    this.iterate = function(){
        _dirChanges = 0;
        Snake.hasEaten();
        ScreenButtonManager.listen();
        MoveButtonManager.listen();
        $('#speedStatus').html(_speed);
        if(!Snake.isAlive()){
            _this.stopGame();
        }
        Snake.move(_currentDirection);
    }


}();

