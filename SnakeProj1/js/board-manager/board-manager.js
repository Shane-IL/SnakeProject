/**
 * Created by Shane on 18/03/2014.
 */
var BoardManager = new function () {

    var rowMarkup = "";
    var nodeMarkup = "";

    var _this = this;

    this.testGetBoardData = function () {
        return boardNodesData;
    };

    var $gameBoard = $('#gameBoard');

    var boardNodesData = [];

    this.populate = function () {
//Fix this -- shoddy code -- Replace with object containing strings
        $.get('js/board-manager/row-template.html', function (data) {
                rowMarkup = data.toString();
                $.get('js/board-manager/node-template.html', function (data) {
                        nodeMarkup = data.toString();
                        populateBoard();
                    }
                );
            }
        );
    };



    function populateBoard() {
        for (var i = 0; i < Global.Constants.GridHeight; i++) {
            boardNodesData[i] = {};

            var $row = $.tmpl(rowMarkup);

            for (var j = 0; j < Global.Constants.GridWidth; j++) {
                var $node = $.tmpl(nodeMarkup);
                boardNodesData[i][j] = {$element: $node, ClassManager: ClassManager.create($node, {class: 'nodeClass'})};
                $row.append($node);
            }

            $row.appendTo($gameBoard);
        }
    };

    this.getNodeData = function(position){
        return boardNodesData[position.top][position.left];
    }

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

