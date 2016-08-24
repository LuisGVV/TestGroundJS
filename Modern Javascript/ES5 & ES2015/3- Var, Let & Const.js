//ES5

"use strict";

var str = 'hi';

if(true){
    var str = 'bye';
}

console.log(str);

// Javascript Hoisting: A variable can be declared after it has been used (definitions are "moved" to the top) 
// => 'bye'

// ES2015 let

let otherString = 'hi';

if(true){
    let otherString = 'bye';
}

console.log(otherString);

// => 'hi'

const lastString = 'hi';

if(true){
    // uncomment this
    // lastString = 'bye';
}

console.log(lastString);

// error:
// lastString is read-only 

let outside = 'outside';

if (true) {
    outside = 'inside';
}

console.log('outside: '+outside);

// => inside -- because let isn't used inside if scope