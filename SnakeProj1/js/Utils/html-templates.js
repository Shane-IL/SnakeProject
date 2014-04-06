/**
 * Created by Shane on 06/04/2014.
 */

var useTemplate = function(template, data){
    if(data){
        return $.tmpl(template, data)
    }
    else{
        return $.tmpl(template)
    }
};

