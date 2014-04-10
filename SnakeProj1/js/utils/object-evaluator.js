/**
 * Created by Shane on 07/04/2014.
 */
$.extend({
    equalObjects: function(obj1, obj2){
        var flag = true;
        if(Object.keys(obj1).length != Object.keys(obj2).length) flag = false;
        else{
            for (var i in obj1) {
                if (obj1.hasOwnProperty(i)) {
                    if (!obj2.hasOwnProperty(i)) flag = false;
                    if (obj1[i] != obj2[i]) flag =  false;
                }
            }
        } return flag;
    }
});




