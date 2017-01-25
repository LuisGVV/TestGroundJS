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
var identity = function identity(arg){
    return arg;
}

console.log(identity(3));

/**
 * Excercise 3:
 * Write two binary functions, add and mul, that take two numbers and return their sum and product
 */
var add = function add(x,y){
    return x+y;
}

var mul = function mul(x,y){
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
        return func(this,y)
    }
}

Number.prototype.add = methodize(add);

console.log((3).add(4))

/**
 * Write demethodize, a function that converts a method to a binary function
 * demethodize(Number.prototype.add)(5,6) -> 11
 */
 

 