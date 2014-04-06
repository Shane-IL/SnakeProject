/**
 * Created by Shane on 18/03/2014.
 */
var BoardManager = new function () {

    var rowMarkup = "";
    var nodeMarkup = "";
    var _this = this;

    var Templates = {
        rowTemplate: '<div class="row-class"></div>',
        nodeTemplate:  '<span class="vertically-centered"></span>'
    }

    this.getBoardData = function () {
        return boardNodesData;
    };

    var $gameBoard;

    var boardNodesData = [];

    this.initialize = function(){
        $gameBoard = $('#gameBoard');
    }

    this.populateBoard = function() {
        for (var i = 0; i < Global.Constants.GridHeight; i++) {
            boardNodesData[i] = {};

            var $row = useTemplate(Templates.rowTemplate);

            for (var j = 0; j < Global.Constants.GridWidth; j++) {
                var $node = useTemplate(Templates.nodeTemplate);
                boardNodesData[i][j] = {$element: $node, ClassManager: ClassManager.create($node, {class: Global.NodeClasses.defaultClass})};
                $row.append($node);
            }
            $row.appendTo($gameBoard);
        }
    };

    this.getNodeData = function(position){
        return boardNodesData[position.top][position.left];
    };

    this.setClassToNode = function (position, className) {
        _this.getNodeData(position).ClassManager.setClass(className);
    };

    this.resetNode = function (position) {
        _this.getNodeData(position).ClassManager.reset();
    };


    this.resetBoard = function(){
      for(var i =0; i<Global.Constants.GridHeight; i++){
            for(var j=0; j<Global.Constants.GridWidth; j++){
                boardNodesData[i][j].ClassManager.reset();
            }
        }
    };

};




