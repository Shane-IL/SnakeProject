/**
 * Created by Shane on 07/04/2014.
 */
$.extend({
    compareObjects: function(obj1, obj2){
        var flag = true;
        if(obj1.length != obj2.length) flag = false;
        else{
            $.each(obj1, function(index1, value1){
                $.each(obj2, function(index2, value2){
                    if(index1 != index2 && value1 != value2) flag = false;

                })
            });
        } return flag;
    }
});




