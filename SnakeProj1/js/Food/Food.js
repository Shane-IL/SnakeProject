/**
 * Created by Shane on 17/03/2014.
 */

var Food = new function(){

    var _this = this;

    var position = {top: 0, left: 0};

    this.getPosition = function(){
        return  position;
    };

    this.FoodClass = 'food-class';


   this.refreshFood = function(){

       BoardManager.setClassToNode(position, 'nodeClass');
       //loop buggered - fix
      do{
          position.top = Math.floor((Math.random()*39));
          position.left = Math.floor((Math.random()*39));
      } while(Snake.occupiesNode(position));

            BoardManager.setClassToNode(position, _this.FoodClass);
    };



};