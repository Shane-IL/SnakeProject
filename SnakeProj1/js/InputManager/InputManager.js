/**
 * Created by Shane on 23/03/2014.
 */
var InputManager =  new function(){
   this.listen = function(){
       $(document).keydown(function(e){
           var key = e.which;
           if(key == "37" && GlobalVariables.currentDirection != snakeDirections.Right) GlobalVariables.currentDirection = snakeDirections.Left;
           else if(key == "38" && GlobalVariables.currentDirection != snakeDirections.Down) GlobalVariables.currentDirection = snakeDirections.Up;
           else if(key == "39" && GlobalVariables.currentDirection != snakeDirections.Left) GlobalVariables.currentDirection = snakeDirections.Right;
           else if(key == "40" && GlobalVariables.currentDirection != snakeDirections.Up) GlobalVariables.currentDirection = snakeDirections.Down;
       });
   }
};
