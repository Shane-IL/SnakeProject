/**
 * Created by user on 11/04/14.
 */
var Holes = new function () {

    var _this = this;
    var _holes = []

    this.getHolesArray = function () {
        return  _holes;
    };

    this.refreshHoles = function(){
        var score = GameLogic.getScore();
        if(score%4 ===0){
            var position = {top: 0, left: 0};
            do {
                position.top = Math.floor((Math.random() * 39));
                position.left = Math.floor((Math.random() * 39));
            } while (Snake.occupiesNode(position) || position===Food.getPosition());
            _holes.push({position: position});
        }
        _this.renderHoles();
    };

    this.clearHoles = function(){
        for(var i=0; i<_holes.length; i++){
            BoardManager.setClassToNode(_holes[i].position, Global.NodeClasses.defaultClass);
        }
        _holes.length=0;
    };

    this.renderHoles = function(){
        for(var i=0; i<_holes.length; i++){
            BoardManager.setClassToNode(_holes[i].position,Global.NodeClasses.holeClass);
        }
    };

    this.inHole = function(position){
        var result = false;
        for(var i=0; i<_holes.length; i++){
            if($.equalObjects(position, _holes[i].position))return true;
        }
        return false;
    };

};