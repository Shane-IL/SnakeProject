/**
 * Created by Shane on 07/04/2014.
 */



//template
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


