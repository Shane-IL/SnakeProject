/**
 * Created by Shane on 06/04/2014.
 */
var Debugging = new function() {

    this.testGeneration = function () {
        var i = 0;
        while (i < 1000) {
            Food.refreshFood();
            console.log(Food.getPosition());
            i++
        }
    };

    this.pushPosition = function(point){
        Snake.getSnakeArray().push({position: point});
    };

    this.getHeadPosition = function(){
        return Snake.getSnakeArray()[0].position;
    };

    this.renderSingleNode = function(point,nodeClass){
        BoardManager.setClassToNode(point, nodeClass);
    };
};


