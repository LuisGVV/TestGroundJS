"use strict"

var EXPENSE_PATH = './Gastos_27-abr-15-may.json'

var fs = require('fs');

var expenseJSON = require(EXPENSE_PATH);

var fortnightSalary = 638*559;

var totalExpense = 0;

for (var prop in expenseJSON) {
    if (expenseJSON.hasOwnProperty(prop)) {
        totalExpense += expenseJSON[prop];
    }
}

console.log("Total ingresos en 15na:", fortnightSalary, '\n');
console.log("Total Gastos en 15na:", totalExpense, '\n');
console.log("Restante para esta 15na:", -(totalExpense - fortnightSalary), '\n');
