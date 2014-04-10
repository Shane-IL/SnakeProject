/**
 * Created by Shane on 20/03/2014.
 */
var ClassManager = new function () {

    this.create = function ($element, options) {
        options = $.extend({
            defaultClass: "default-class"}, options);

        var currentClass = options.class;

        var controller = {
            setClass: function (newClass) {
                controller.reset();
                $element.addClass(newClass);
                currentClass = newClass;
            },
            reset: function () {
                if (currentClass != Global.NodeClasses.defaultClass) {
                    $element.removeClass(currentClass);
                }
            }
        };

        if (currentClass) {
            controller.setClass(currentClass);
        }
        return controller;
    };
};


/*

 this.create = function ($element, options) {

 options = $.extend({
 defaultClass: "nodeClass",
 snakeClass: "snakeClass",
 foodClass: "foodClass"

 }, options);


 var defaultClass = options.defaultClass;
 var snakeClass = options.snakeClass;
 var foodClass = options.foodClass;
 var currentClass = options.class;


 var controller = {
 setClass: function (newClass) {
 controller.reset();
 $element.addClass(newClass);
 },
 reset: function () {
 if(currentClass){
 $element.removeClass(currentClass);
 }
 }
 };

 if(currentClass){
 controller.setClass(currentClass);
 }

 return controller;
 }


 */