"use strict"

function personFactory(id,name,birthdate) {
    return {
        id: id,
        name: name,
        birthdate: birthdate
    }
}

function getAge(birthdate) {
    return this.birthdate.getFullYear();
}

var Luis = personFactory("Luis", 132465798, (new Date(1991,1,1)));
var John = personFactory("John", 987654321, (new Date(1975,1,1)));

var JohnBinded = getAge.bind(John);

console.log("JohnBinded:", JohnBinded());

var LuisBindedAfter = JohnBinded.bind(Luis);

console.log("LuisBindedAfter:", LuisBindedAfter());

