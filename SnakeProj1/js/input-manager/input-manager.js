/**
 * Created by Shane on 23/03/2014.
 */
var InputManager =  new function(){
   this.listen = function(){
       $(document).keydown(function(e){
           var key = e.which;
           if(key == "37" && GameLogic.getCurrentDirection() != Global.SnakeDirections.Right) GameLogic.setCurrentDirection(Global.SnakeDirections.Left);
           else if(key == "38" && GameLogic.getCurrentDirection() != Global.SnakeDirections.Down) GameLogic.setCurrentDirection(Global.SnakeDirections.Up);
           else if(key == "39" && GameLogic.getCurrentDirection() != Global.SnakeDirections.Left) GameLogic.setCurrentDirection(Global.SnakeDirections.Right);
           else if(key == "40" && GameLogic.getCurrentDirection() != Global.SnakeDirections.Up) GameLogic.setCurrentDirection(Global.SnakeDirections.Down);
       });
   }
};
