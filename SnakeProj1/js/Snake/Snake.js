/* Created by Shane on 17/03/2014.
 */

var Snake = new function() {

    var _this = this;
    var _snake=[];
    var _growing = 0;
    var _tailNode;

    this.refreshSnake = function(){
        GameLogic.setCurrentDirection(Global.SnakeDirections.Left);
        if(_snake.length>0){
            _this.resetSnakeNodes();
        }
        _snake.length =0;
        for (var i = 0; i < Global.Constants.InitialSnakeLength; i++) {
            _snake.push(
                {position:{top: Global.Constants.InitialSnakePosition.top, left: Global.Constants.InitialSnakePosition.left+i}})
        }
        this.renderAll();

    };

    this.occupiesNode = function(position){
          for(var i=0; i<_snake.length; i++){
              if($.equalObjects(position, _snake[i].position))return true;
          }
        return false;
    };

    this.eatingSelf = function(position){
        for(var i=1; i<_snake.length; i++){
            if($.equalObjects((position), _snake[i].position))return true;
        }
        return false;
    };

    this.renderAll = function(){
        for(var i=0; i<_snake.length; i++){
            BoardManager.setClassToNode(_snake[i].position,Global.NodeClasses.snakeClass);
        }
    };

    this.resetSnakeNodes = function(){
        for(var i=0; i<_snake.length; i++){
            BoardManager.resetNode(_snake[i].position);
        }
    };

    this.isAlive = function(){
        if(_this.eatingSelf(_snake[0].position)) return false;
        else if(GameLogic.isWall(_snake[0].position)) return false;
        else if (Holes.inHole(_snake[0].position)) return false;
        else return true;
    };

    this.hasEaten = function(){
        if($.equalObjects(Food.getPosition(), _snake[0].position)){
            Food.refreshFood();
            Holes.refreshHoles();
            _growing = 3;
            GameLogic.incrementScore();
        }
    };

    this.getSnakeArray = function(){
        return _snake;
    };

    this.move = function(direction){
        _tailNode= _snake[_snake.length-1];
        switch(direction)
        {
            case Global.SnakeDirections.Left:
                if(_growing<1)
                {
                    BoardManager.resetNode(_tailNode.position);
                    _tailNode.position.top= _snake[0].position.top;
                    _tailNode.position.left = _snake[0].position.left-1;
                    _snake.unshift(_snake.pop());
                    BoardManager.setClassToNode(_snake[0].position, Global.NodeClasses.snakeClass)
                }
                else
                {
                    _snake.unshift({position: {top: _snake[0].position.top, left: _snake[0].position.left-1}});
                    _growing--;
                    BoardManager.setClassToNode(_snake[0].position, Global.NodeClasses.snakeClass)
                }
                break;
            case Global.SnakeDirections.Right:
                if(_growing<1)
                {
                    BoardManager.resetNode(_tailNode.position);
                    _tailNode.position.top= _snake[0].position.top;
                    _tailNode.position.left = _snake[0].position.left+1;
                    _snake.unshift(_snake.pop());
                    BoardManager.setClassToNode(_snake[0].position, Global.NodeClasses.snakeClass)
                }
                else
                {
                    _snake.unshift({position: {top: _snake[0].position.top, left: _snake[0].position.left+1}});
                    _growing--;
                    BoardManager.setClassToNode(_snake[0].position, Global.NodeClasses.snakeClass)
                }
                break;
            case Global.SnakeDirections.Up:
                if(_growing<1)
                {
                    BoardManager.resetNode(_tailNode.position);
                    _tailNode.position.top= _snake[0].position.top-1;
                    _tailNode.position.left = _snake[0].position.left;
                    _snake.unshift(_snake.pop());
                    BoardManager.setClassToNode(_snake[0].position, Global.NodeClasses.snakeClass)
                }
                else
                {
                    _snake.unshift({position: {top: _snake[0].position.top-1, left: _snake[0].position.left}});
                    _growing--;
                    BoardManager.setClassToNode(_snake[0].position, Global.NodeClasses.snakeClass)
                }
                break;
            case Global.SnakeDirections.Down:
                if(_growing<1)
                {
                    BoardManager.resetNode(_tailNode.position);
                    _tailNode.position.top= _snake[0].position.top+1;
                    _tailNode.position.left = _snake[0].position.left;
                    _snake.unshift(_snake.pop());
                    BoardManager.setClassToNode(_snake[0].position, Global.NodeClasses.snakeClass)
                }
                else
                {
                    _snake.unshift({position: {top: _snake[0].position.top+1, left: _snake[0].position.left}});
                    _growing--;
                    BoardManager.setClassToNode(_snake[0].position, Global.NodeClasses.snakeClass)
                }
                break;
            default:
                break;
        }

    };
};