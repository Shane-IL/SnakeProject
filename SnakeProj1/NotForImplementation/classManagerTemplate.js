/**
 * Created by Shane on 17/03/2014.
 */

this.create = function ($element, options) {

    options = $.extend({
        defaultClass:undefined,
        amir:2
    }, options);


    var defaultClass = options.defaultClass;
    var amir = options.amir;
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