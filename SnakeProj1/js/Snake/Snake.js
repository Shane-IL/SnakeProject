/* Created by Shane on 17/03/2014.
 */

var Snake = new function() {

    var _this = this;
    var _snake=[];
    var _growing = 0;

    function getTailNode(){
        return _snake[_snake.length-1];
    }


    this.initialize = function(){
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

    this.occupiesNode =  function (position){
        //simplify
        var flag = false;
        for(var i=0; i<_snake.length; i++){
            if(_snake[i].position.top === position.top && _snake[i].position.left === position.left)flag = true;

        }

        return flag;
    };

    this.pushPosition = function(point){
        _snake.push({position: point});
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


    this.renderSingleNode = function(point){
        BoardManager.setClassToNode(point, Global.NodeClasses.snakeClass);
    };



    this.isAlive = function(){
        if(_this.occupiesNode(_snake[0])) return false;

        else if(GameLogic.isWall(_snake[0])) return false;

        else return true;
    };

    this.hasEaten = function(){
        if(Food.getPosition() === _snake[0].position){
            Food.refreshFood();
            _growing = 3;
            GameLogic.incrementScore();
        }
    };

    this.headPosition = function(){
        return _snake[0].position;
    };

    this.getSnakeArray = function(){
        return _snake;
    };

    this.move = function(direction){
        // var _headNode = _snake[0]
        switch(direction)
        {
            case Global.SnakeDirections.Left:
                if(_growing<1)
                {
                    BoardManager.resetNode(getTailNode().position);
                    getTailNode().top= _snake[0].position.top;
                    getTailNode().left = _snake[0].position.left-1;
                    _snake.unshift(_snake.pop());
                    BoardManager.setClassToNode(_snake[0].position, 'snakeNode')
                }
                else
                {
                    _snake.unshift({position: {top: _snake[0].position.top, left: _snake[0].position.left-1}});
                    _growing--;
                }
                break;
            case Global.SnakeDirections.Right:
                if(_growing<1)
                {
                    BoardManager.resetNode(getTailNode().position);
                    getTailNode().top= _snake[0].position.top;
                    getTailNode().left = _snake[0].position.left+1;
                    _snake.unshift(_snake.pop());
                    BoardManager.setClassToNode(_snake[0].position, 'snakeNode')
                }
                else
                {
                    _snake.unshift({position: {top: _snake[0].position.top, left: _snake[0].position.left+1}});
                    _growing--;
                }
                break;
            case Global.SnakeDirections.Up:
                if(_growing<1)
                {
                    BoardManager.resetNode(getTailNode().position);
                    getTailNode().top= _snake[0].position.top+1;
                    getTailNode().left = _snake[0].position.left;
                    _snake.unshift(_snake.pop());
                    BoardManager.setClassToNode(_snake[0].position, 'snakeNode')
                }
                else
                {
                    _snake.unshift({position: {top: _snake[0].position.top+1, left: _snake[0].position.left}});
                    _growing--;
                }
                break;
            case Global.SnakeDirections.Down:
                if(_growing<1)
                {
                    BoardManager.resetNode(getTailNode().position);
                    getTailNode().top= _snake[0].position.top-1;
                    getTailNode().left = _snake[0].position.left;
                    _snake.unshift(_snake.pop());
                    BoardManager.setClassToNode(_snake[0].position, 'snakeNode')
                }
                else
                {
                    _snake.unshift({position: {top: _snake[0].position.top-1, left: _snake[0].position.left}});
                    _growing--;
                }
                break;
            default:
                break;
        }

    };
};