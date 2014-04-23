/**
 * Created by Shane on 22/04/2014.
 */
var SizeManager = new function(){
    var _this =  this;

    this.setBoardSize = function(){
       var $board = $('#game-board');
       $board.css("width", Global.Constants.GridWidth*Global.Constants.SizeMultiplier);
       $board.css("height", Global.Constants.GridHeight*Global.Constants.SizeMultiplier);
       $board.css("margin-top", -(Global.Constants.GridHeight*(Global.Constants.SizeMultiplier/2)));
       $board.css("margin-left", -(Global.Constants.GridWidth*(Global.Constants.SizeMultiplier/2)));
    };

    this.setInitialSnakePosition = function(){
      Global.Constants.InitialSnakePosition.top = (Global.Constants.VerticalBorder)/2;
      Global.Constants.InitialSnakePosition.left = (Global.Constants.HorizontalBorder)/2;
    };

    this.setGridBorders = function(){
        Global.Constants.VerticalBorder = Global.Constants.GridHeight/Global.Constants.GridCellHeight;
        Global.Constants.HorizontalBorder = Global.Constants.GridWidth/Global.Constants.GridCellWidth
    };

};
