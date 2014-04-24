/**
 * Created by user on 11/04/14.
 */
var Poos = new function () {

    var _this = this;
    var _poos = [];
    var _prePoo;

    this.getPoosArray = function () {
        return  _poos;
    };

    this.digest = function(position){
        if(Snake.occupiesNode(position)){
            BoardManager.setClassToNode(position, Global.NodeClasses.pooClass)
        }
    };

    this.newPoo = function(position){

    };

    this.refreshHoles = function(){
        var score = GameLogic.getScore();
        if(score%4 ===0){
            var position = {top: 0, left: 0};
            do {
                position.top = Math.floor((Math.random() * (Global.Constants.VerticalBorder-1)));
                position.left = Math.floor((Math.random() * (Global.Constants.HorizontalBorder-1)));
            } while (Snake.occupiesNode(position) || position===Food.getPosition());
            _poos.push({position: position});
        }
        _this.renderHoles();
    };

    this.clearHoles = function(){
        for(var i=0; i<_poos.length; i++){
            BoardManager.setClassToNode(_poos[i].position, Global.NodeClasses.defaultClass);
        }
        _poos.length=0;
    };

    this.renderHoles = function(){
        for(var i=0; i<_poos.length; i++){
            BoardManager.setClassToNode(_poos[i].position,Global.NodeClasses.holeClass);
        }
    };


    this.inHole = function(position){
        for(var i=0; i<_poos.length; i++){
            if($.equalObjects(position, _poos[i].position))return true;

        }
        return false;
    };


};