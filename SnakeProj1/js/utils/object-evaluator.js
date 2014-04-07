/**
 * Created by Shane on 07/04/2014.
 */
$.fn.extend({
    compareObjects: function(obj1, obj2){
        if(obj1.length != obj2.length) return false;
        else{
            $.each(obj1, function(index1, value1){
                $.each(obj2, function(index2, value2){
                    if(index1 === index2 && value1 ===value2) return true;

                })
            }); return false;
        }
    }
});




