"use strict"

//ES6
let nums = [1,2,3,];

function addEverything(a,b,c){
    return a+b+c;
};

let val = addEverything(...nums);

console.log(val);

object = [4,5,6];

//ES5
var nums2 = [1,2,3,];

function addEverythingES5(a,b,c){
    return a+b+c;
};

var val2 = addEverythingES5.apply(this,nums2);

console.log(val2);
