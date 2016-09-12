"use strict"

var object = {
    a: 1,
    b: 2
};

var {a, b} = object;

console.log(a,b);

var prism = {
    l: 5,
    w: 8
}

var rectPrismArea = function({l, w, h=10}) {
    return l*w*h;
}

console.log(rectPrismArea({prism}))

