/**
 * Created by Shane on 16/01/14.
 */
/*var heightParser = function(height, multiplier){
    return height * multiplier;
};

var widthParser = function(width, multiplier){
    return width * multiplier
};

function renderGrid(){
    $('#gameBoard').css({
        'width': (constants.gridWidth),
        'height': (constants.gridHeight)

    })};

*/

function renderFood(){
    $(_food.$node).css("top", _food.top).css("left", _food.left);
    $('#gameBoard').append(_food.$node);

    };

function renderSnakeNode(node){
  $(node).addClass('snakeNode').css(top, node.top);

};

function renderWholeSnake(){
 for(var n in _snake){

 }
};