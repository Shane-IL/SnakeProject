/**
 * Created by Shane on 13/04/2014.
 */
var DisplayManager = new function(){
  this.update =  function(){
      $('#speedStatus').html("Speed: "+GameLogic.getSpeed());
      $('#score').html("Score: "+GameLogic.getScore());
      $('#hi-score').html("High Score: "+GameLogic.getHiScore());
  }
};