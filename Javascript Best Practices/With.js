'use strict';

var obj = {
    a: {
        b: {
            c: 'hello'
        }
    }
}

var c = 'this is important';

/* 
with(obj.a.b){
    console.log(c);
}
*/

(function(newVar){
    console.log(newVar);
}(obj.a.b.c))

