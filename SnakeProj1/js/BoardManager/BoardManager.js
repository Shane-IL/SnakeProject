/**
 * Created by Shane on 18/03/2014.
 */
var BoardManager = new function() {

    this.testGetBoardData = function(){
      return boardNodesData;
    };

    var boardNodesData = [];

    this.populate = function(){
        var rowMarkup = "<div id='row-${topCoord}' class='rowClass' style='top: ${top}'></div>";
        var nodeMarkup = "<div id='node-${topCoord}-${leftCoord}' class='nodeClass' style='left: ${left}'></div>";

        $.template("rowTemplate", rowMarkup);
        $.template("nodeTemplate", nodeMarkup);

        for(var i=0; i<constants.gridHeight; i++){
            boardNodesData[i]={}
            var $row = $.tmpl("rowTemplate", {topCoord: (i*10), top: (i*10).toString()+"px"});
            $row.appendTo('#gameBoard');

            for(var j = 0; j< constants.gridWidth; j++){
                var $node = $.tmpl("nodeTemplate", {topCoord:(i*10),leftCoord: (j*10), left: (j*10).toString()+"px"});
                boardNodesData[i][j] = {$element: $node, ClassManager: ClassManager.create($node, {class: 'nodeClass'})};
                $("#row-"+(i*10)).append($node);




            }
        }
    };

   this.setClassToNode = function(position,className){
        boardNodesData[position.top][position.left].ClassManager.setClass(className);
    };

   this.resetNode = function(position){
        boardNodesData[position.top][position.left].ClassManager.reset();
   };

};


