/**
 * Created by Shane on 23/03/2014.
 */
var MoveButtonManager = new function () {
    this.listen = function () {
        $(document).keydown(function (e) {
            var key = e.which;
            if (GameLogic.getChanges() < 1) {
                if (key == "37" && GameLogic.getCurrentDirection() != Global.SnakeDirections.Right) {
                    GameLogic.setCurrentDirection(Global.SnakeDirections.Left);
                    GameLogic.incrementChanges();
                }
                else if (key == "38" && GameLogic.getCurrentDirection() != Global.SnakeDirections.Down) {
                    GameLogic.setCurrentDirection(Global.SnakeDirections.Up);
                    GameLogic.incrementChanges();
                }
                else if (key == "39" && GameLogic.getCurrentDirection() != Global.SnakeDirections.Left) {
                    GameLogic.setCurrentDirection(Global.SnakeDirections.Right);
                    GameLogic.incrementChanges();
                }
                else if (key == "40" && GameLogic.getCurrentDirection() != Global.SnakeDirections.Up) {
                    GameLogic.setCurrentDirection(Global.SnakeDirections.Down);
                    GameLogic.incrementChanges();
                }
            }
        });
    }
};

var MasterControls = new function () {
    this.listen = function () {
        $('#resetButton').click(function () {
            GameLogic.resetGame()
        });
    };
};

var ScreenButtonManager = new function () {
    this.listen = function () {
        $('#speedUp').unbind().click(function () {
            GameLogic.incrementSpeed(-50)
        });
        $('#speedDown').unbind().click(function () {
            GameLogic.incrementSpeed(50)
        });
        $(document).unbind().keydown(function (e) {
            var key = e.which;
            if (GameLogic.getChanges() < 1) {
                if (key == "90") {
                    GameLogic.incrementSpeed(-50)
                }
                else if (key == "88") {
                    GameLogic.incrementSpeed(50)
                }
            }
        });
    };
};