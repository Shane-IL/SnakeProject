/**
 * Created by Shane on 17/03/2014.
 */

var Food = new function(){

    var _this = this;

    var position = {top: 0, left: 0};

    this.getPosition = function(){
        return  position;
    };

   this.refreshFood = function(){
   if(!Snake.occupiesNode(position))BoardManager.setClassToNode(position, Global.NodeClasses.defaultClass);
  do{
          position.top = Math.floor((Math.random()*39));
          position.left = Math.floor((Math.random()*39));
    } while(Snake.occupiesNode(position));
        BoardManager.setClassToNode(position, Global.NodeClasses.foodClass);
    };



};