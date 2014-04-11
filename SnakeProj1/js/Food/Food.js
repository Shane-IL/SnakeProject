/**
 * Created by Shane on 17/03/2014.
 */

var Food = new function () {

    var _this = this;
    var _position = {top: 0, left: 0};

    this.getPosition = function () {
        return  _position;
    };

    this.refreshFood = function () {
        if (!Snake.occupiesNode(_position))BoardManager.setClassToNode(_position, Global.NodeClasses.defaultClass);
        do {
            _position.top = Math.floor((Math.random() * 39));
            _position.left = Math.floor((Math.random() * 39));
        } while (Snake.occupiesNode(_position) || Holes.inHole(_position));
        BoardManager.setClassToNode(_position, Global.NodeClasses.foodClass);
    };


};