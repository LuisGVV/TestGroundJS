function asyncMethod(message){
    return new Promise(function(fulfill, reject){
        setTimeout(function(){
            console.log(message);
            fulfill();
        }, 500);
    });
};

function findUser(){
    return asyncMethod('Find User');
}

function validateUser(){
    return asyncMethod('validate User');
}

function doStuff(){
    return asyncMethod('do stuff');
}

asyncMethod('OpenDB Connection')
    .then(findUser, error)
    .then(validateUser)
    .then(doStuff)
    .then(function(){});





