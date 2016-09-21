//Arrow Functions:
//Mantain parent object scope in callback functions

"use strict"

let object = {
    collection: ['patrick', 'scott', 'mike'],
    domain: 'luisgvv.com',
    method: function(){
        return this.collection.map(item => {
            return `${ item }@${ this.domain }`
        });
    }
}

console.log(object.method());

// ES5
var objectES5 = {
    collection: ['patrick', 'scott', 'mike'],
    domain: 'luisgvv.com',
    method: function(){
        var mapEmail = function(item){
            return item + '@' + this.domain;
        }.bind(this);
        return this.collection.map(mapEmail);
    }
}

console.log(objectES5.method());
