'use strict';

function asyncMethod(message, num){
    return new Promise(function(fulfill, reject){
        setTimeout(function(){
            console.log(message + ' ' + num);
            fulfill(num + 1);
        }, 500);
    });
};

async function main(){
    var one = await asyncMethod('OpenDB Connection', 0);
    var two = await asyncMethod('Find User', one);
    var three = await asyncMethod('Validate User', two);
    var four = await asyncMethod('Do stuff', three);    
}

main();






