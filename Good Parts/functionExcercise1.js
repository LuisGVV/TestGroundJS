'use strict'
// Excercise 1:
function funky(o){
    o = null;
}

var x = [];

funky(x);
// What is x value?
console.log(x);

function swap(a,b){
    var temp = a;
    a = b;
    b = temp;
}

var x = 1, y = 2;
swap(x,y);

// What will be x value?
console.log(x);


/**
 * Excercise 2:
 * Write a function that takes an argument that returns that argument
 * */
function identity(arg){
    return arg;
}

console.log(identity(3));

/**
 * Excercise 3:
 * Write two binary functions, add and mul, that take two numbers and return their sum and product
 */
function add(x,y){
    return x+y;
}

function mul(x,y){
    return x*y;
}

console.log(add(20,3));
console.log(mul(20,3));

/**
 * Excercise 4:
 * Write a function that takes an argument and returns a function that returns that argument
 */

function identityf(arg){
    return function pseudoIdentity(){
        return arg;
    } 
}

var idf = identityf(3);

console.log(idf());

/**
 * Excercise 5: Write a function that adds from two invocations
 * addf(3)(4) == 7
 */
function addf(x){
    return function (y){
        return add(x,y);
    }
}
console.log('addf(3)(4): ',addf(3)(4));

/**
 * Excercise 6: Write a function that takes a binary function, and makes it a callable with two invocations
 * 
 */

function applyf(binary){
    return function(x){
        return function(y){
            return binary(x,y);
        }
    }
}

var add_3_4 = applyf(add)(3)(4);
var mul_5_6 = applyf(mul)(5)(6);

console.log('applyf(add)(3)(4): ',add_3_4);
console.log('applyf(mul)(5)(6): ',mul_5_6);

/**
 * Excercise: Write a function that takes a function and an argument,
 * and returns a function that can supply a second argument
 * curry(mul, 5)(6) returns 30
 */

function curry (binary, firstArg){
    return function(secondArg){
        return binary(firstArg, secondArg);
    }
}

var add3 = curry(add, 3)
console.log('add3(4): ', add3(4));

/**
 * Without writing any new functions, show three ways to create the inc function
 * inc(5) -> 6
 */

var inc1 = applyf(add)(1);

var inc2 = curry(add, 1);

var inc3 = addf(1);


console.log('inc1(5):', inc1(5))
console.log('inc2(5):', inc2(5))
console.log('inc3(5):', inc3(5))

/**
 * Write methodize, a function that converts a binary function to a method
 * Number.prototype.add = methodize(add);
 * (3).add(4) -> 7
 */

function methodize (func){
    return function(y){
        return func(this, y)
    }
}

Number.prototype.add = methodize(add);

console.log( (3).add(4) )

/**
 * Write demethodize, a function that converts a method to a binary function
 * demethodize(Number.prototype.add)(5,6) -> 11
 */
 
function demethodize(method){
    return function(a,b){
        return method.apply(a, [b]);
    }
}

 
function demethodizeAlt(method){
    return function(a,b){
        return method.call(a, b);
    }
}

console.log(demethodize(Number.prototype.add)(5,6))

/**
 * Write a function twice that takes a binary function and returns a unary function that
 * passes its argument to the binary function twice
 */

function twice(binaryFunc){
    return function unary(value){
        return binaryFunc(value,value);
    }
}

var double = twice(add);

console.log(double(11)); // returns 22

var square = twice(mul);

console.log(square(11)); // returns 121

/**
 * Write a function composeu that takes two unary functions 
 * and returns a unary function that calls them both
 */

function composeu(unary1, unary2){
    return function(value){
        return unary2(unary1(value));
    }
}

console.log(composeu(double, square)(3));

/**
 * Write a function composeb that takes two binary functions and returns
 * a function that calls them both.
 */

function composeb(binary1, binary2){
    return function(a,b,c){
        return binary2(binary1(a,b),c);
    }
}

console.log(composeb(add,mul)(2,3,5)); // 25

/**
 * Write a function that allows another function to only be called once
 * add(3,4) OK!
 * var add_once = once(add)
 * add_once(3,4) // OK
 * add_once(3,4) // Throw!
 */

function once(func){
    return function(){
        var f = func;
        func = null;
        return f.apply(this, arguments);
    }
}

var add_once = once(add);
try{
    console.log("add_once(3,4):", add_once(3,4));
    //add_once(3,4);
}catch (e){
    console.log(e);
}

/**
 * Write a factory function that returns two functions that implement an up/down counter
 * counter = counterf(10);
 * counter.inc() -> 11
 * counter.dec() -> 10
 */

function counterf(value){
    var currentValue = value;

    function increment(){
        currentValue +=1;
        return currentValue;
    }

    function decrement(){
        currentValue -=1;
        return currentValue;
    }

    return {
        inc: increment,
        dec: decrement
    }
}

var counter = counterf(10);
counter.inc();
counter.dec();

console.log("counter.inc():", counter.inc());

var counter2 = counterf(3);
counter2.inc();
counter2.dec();

console.log("counter2.inc():", counter2.inc());

console.log("counter.inc():", counter.inc());

/**
 * Make a revocable function that takes a nice function, and returns a revoke
 * function that denies access to the nice function, and an invoke function that
 * can invoke the nice function until it is revoked.
 */

var temp = revocable(console.log);
temp.invoke(7); //alert: 7
temp.revoke();
temp.invoke(8); // throw!

function revocable(niceFunction){
    var f = niceFunction;
    function invoke(){
        f.apply(this, arguments);
    }

    function revoke(){
        f = null;
    }
    return {
        invoke: invoke,
        revoke: revoke
    }
}

var jaja;


console.log(234);
