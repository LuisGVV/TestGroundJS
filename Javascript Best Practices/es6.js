'use strict';

/* 
For babel use:
$ npm install -g babel
$ npm install -g babel-cli package
$ npm install --save-dev babel-preset-es2015

** create .babelrc file and insert options: 
{
    "presets": [
        "es2015"
    ],
    "plugins": []
}

then:

$ babel babelApp.js -o es6.js

*/

for (var _i = 0; _i < 10; _i++) {
    console.log(_i);
}

console.log('I see i... ' + i);
