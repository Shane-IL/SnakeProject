/**
 * Created by Shane on 23/03/2014.
 */
var InputManager =  new function(){
   this.listen = function(){
       $(document).keydown(function(e){
           var key = e.which;
           if(key == "37" && GameLogic.getCurrentDirection() != snakeDirections.Right) GameLogic.setCurrentDirection(snakeDirections.Left);
           else if(key == "38" && GameLogic.getCurrentDirection() != snakeDirections.Down) GameLogic.setCurrentDirection(snakeDirections.Up);
           else if(key == "39" && GameLogic.getCurrentDirection() != snakeDirections.Left) GameLogic.setCurrentDirection(snakeDirections.Right);
           else if(key == "40" && GameLogic.getCurrentDirection() != snakeDirections.Up) GameLogic.setCurrentDirection(snakeDirections.Down);
       });
   }
};
