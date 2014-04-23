/**
 * Created by Shane on 18/03/2014.
 */
var BoardManager = new function () {

    var _this = this;
    var $gameBoard;
    var boardNodesData = [];
    var Templates = {
        rowTemplate: '<div class="row-class" style="height: ${tempheight}"></div>',
        nodeTemplate: '<span class="vertically-centered" style="height: ${tempheight}; width: ${tempwidth}"></span>'
    }

    this.getBoardData = function () {
        return boardNodesData;
    };

    this.initialize = function () {
        $gameBoard = $('#game-board');
    }

    this.populateBoard = function () {
        for (var i = 0; i < Global.Constants.GridHeight/Global.Constants.GridCellHeight; i++) {
            boardNodesData[i] = {};

            var $row = useTemplate(Templates.rowTemplate, {tempheight: (Global.Constants.GridCellHeight*Global.Constants.SizeMultiplier).toString()+'px'});

            for (var j = 0; j < Global.Constants.GridWidth/Global.Constants.GridCellWidth; j++) {
                var $node = useTemplate(Templates.nodeTemplate, {tempheight: (Global.Constants.GridCellHeight*Global.Constants.SizeMultiplier).toString()+'px', tempwidth: (Global.Constants.GridCellWidth*Global.Constants.SizeMultiplier).toString()+'px'});
                boardNodesData[i][j] = {$element: $node, ClassManager: ClassManager.create($node, {class: Global.NodeClasses.defaultClass})};
                $row.append($node);
            }
            $row.appendTo($gameBoard);
        }
    };

    this.getNodeData = function (position) {
        if (GameLogic.isWall(position)) GameLogic.stopGame();
        else return boardNodesData[position.top][position.left];
    };

    this.setClassToNode = function (position, className) {
        if (GameLogic.isWall(position)) GameLogic.stopGame();
        else _this.getNodeData(position).ClassManager.setClass(className);
    };

    this.resetNode = function (position) {
        if (!GameLogic.isWall(position)) _this.getNodeData(position).ClassManager.reset();
    };


    this.resetBoard = function () {
        for (var i = 0; i < Global.Constants.GridHeight; i++) {
            for (var j = 0; j < Global.Constants.GridWidth; j++) {
                boardNodesData[i][j].ClassManager.reset();
            }
        }
    };

};




