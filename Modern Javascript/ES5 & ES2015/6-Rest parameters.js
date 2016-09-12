

function printArguments(...args){
    args.forEach(function(arg){
        console.log('rest args:', arg);
    });
};

printArguments(1,2,3);

// rest args: 1
// rest args: 2
// rest args: 3


//Before ES6
printObjects({name: "Luis"},{name:"Juan"},{name: "Pedro"});

function printObjects(){
    var args = [].slice.call(arguments,0); 
    args.forEach(function(arg){
        console.log('argument',arg);
    });
};

//ES6

printObjectsES6({name: "Luis"},{name:"Juan"},{name: "Pedro"});

function printObjectsES6(...args){ 
    args.forEach(function(arg){
        console.log('argument',arg);
    });
};
