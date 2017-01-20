
function funky(o){
    o = null;
}

var x = [];

funky(x);
console.log(x);

function swap(a,b){
    var temp = a;
    a = b;
    b = temp;
}

var x = 1, y = 2;
swap(x,y);
console.log(x);

var identity = function identity(arg){
    return arg;
}

console.log(identity(3));


var add = function add(x,y){
    return x+y;
}

var mul = function mul(x,y){
    return x*y;
}

var value1 = 20, value2 = 3;

console.log(add(value1,value2));
console.log(mul(value1,value2));

function identityf(arg){
    return function pseudoIdentity(){
        return arg;
    } 
}


function addf(x){
    return function (y){
        return add(x,y);
    }
}

var idf = identityf(3);

console.log(idf());

var a = 3, b =4;

var addedf = addf(a);

console.log(addedf(b));

a = 5;

console.log(addedf(b));


