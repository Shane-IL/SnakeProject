/**
 * Created by Shane on 18/03/2014.
 */
var BoardManager = new function () {

    var rowMarkup = "";
    var nodeMarkup = "";

    this.testGetBoardData = function () {
        return boardNodesData;
    };

    var $gameBoard = $('#gameBoard');

    var boardNodesData = [];

    this.populate = function () {
//Fix this -- shoddy code
        $.get('js/BoardManager/RowTemplate.html', function (data) {
                rowMarkup = data.toString();
                $.get('js/BoardManager/NodeTemplate.html', function (data) {
                        nodeMarkup = data.toString();
                        populateBoard();
                    }
                );
            }
        );
    };



    function populateBoard() {
        for (var i = 0; i < constants.gridHeight; i++) {
            boardNodesData[i] = {};

            var $row = $.tmpl(rowMarkup);

            for (var j = 0; j < constants.gridWidth; j++) {
                var $node = $.tmpl(nodeMarkup);
                boardNodesData[i][j] = {$element: $node, ClassManager: ClassManager.create($node, {class: 'nodeClass'})};
                $row.append($node);
            }

            $row.appendTo($gameBoard);
        }
    };

    this.setClassToNode = function (position, className) {
        boardNodesData[position.top][position.left].ClassManager.setClass(className);
    };

    this.resetNode = function (position) {
        boardNodesData[position.top][position.left].ClassManager.reset();
    };

    //Replaced with individual reset for snake nodes -- check why didnt work.
    this.resetBoard = function(){
      for(var i =0; i<constants.gridCellHeight; i++){
            for(var j=0; j<constants.gridCellWidth; j++){
                boardNodesData[i][j].ClassManager.reset();
            }
        }
    };

};


