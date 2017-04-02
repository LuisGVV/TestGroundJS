function MONAD(){
    var prototype = Object.create(null);
    function unit(value) {
        var monad = Object.create(prototype);
        monad.bind = function(func, args) {
            return func.apply(undefined,
                [value].concat(Array.prototype
                    .slice.apply(args || [])));
        };
        return monad;
    }
    unit.method = function(name, func){
        prototype[name] = func;
        return unit;
    }
    return unit;
}

function MONAD_es6(){
    var prototype = Object.create(null);
    function unit(value) {
        var monad = Object.create(prototype);
        monad.bind = function(func, args) {
            return func(value, ...args);
        };
        return monad;
    }
    unit.lift = function(name, func){
        prototype[name] = function(...args){
            return unit(this.bind(func,args));
        };
        return unit;
    }
    return unit;
}

var ajax_es6 = MONAD_es6().lift('consoleLog',console.log);

var monad_es6 = ajax_es6("Hello World!");

monad_es6.consoleLog();

var ajax = MONAD().method('consoleLog',console.log);

var monad = ajax("Hello World!");

monad.consoleLog();