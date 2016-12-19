// slice from last to first

var ipp = 50

var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34];

var b = [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't']];

var c = [];

console.log(a.length);

var begin;

for(var i = a.length; i > 0 ; i-= ipp){
    begin = (i - ipp > 0 ? i - ipp: 0);
    console.log(begin, i);
    //b.unshift(a.slice(i - ipp, i));
    c.unshift(a.slice(begin, i));    
}

//c.unshift(a.slice(-15,35));

console.log(c);

