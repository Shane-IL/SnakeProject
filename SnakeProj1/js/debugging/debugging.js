/**
 * Created by Shane on 06/04/2014.
 */
var Debugging = new function() {

    this.testGeneration = function () {
        var i = 0;
        while (i < 1000) {
            Food.refreshFood();
            console.log(Food.getPosition());
            i++
        }
    };
};
