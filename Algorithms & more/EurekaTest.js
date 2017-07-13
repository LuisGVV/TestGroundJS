"use strict";

var names = ["2 Components + Adv Filter", "Babayaga", "Category 1", "Category 2", "Comma, separated, category", "Comma, separated, categoy", "custom TF cat", "Hello", "MultiCategory", "no Custom TF", "not Custom TF last 14 days", "not Custom TF last 30 days", "not Custom TF last 7 days", "not Custom TF month2 date", "not Custom TF previous month", "not Custom TF previous week", "not Custom TF today", "not Custom TF yesterday"];

var concatenated = names.reduce(function (accumulated, name){
    return accumulated += name+'\n'
}, "");

console.log("concatenated:", concatenated);





