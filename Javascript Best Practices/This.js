'use strict';
var obj = {
    val: 'Hi there',
    printVal: function(){
        console.log(this);
        console.log(this.val);
    }
};

var obj2 = {
    val:'Whats up'
}

obj2.printVal = obj.printVal; // JS looks at leading object

var print = obj.printVal.bind(obj2);
print();

obj.printVal();

obj2.printVal();




