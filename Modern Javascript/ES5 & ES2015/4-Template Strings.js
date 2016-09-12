"use strict"

// Template strings use back

var myData = {
    data: "hello"
};

var template = `
    <div>
        ${myData.data}
    </div>
`

var templateOld = ''+
    '<div>'+
    myData.data+
    '</div>'+
'';


console.log(template);

console.log(templateOld);






