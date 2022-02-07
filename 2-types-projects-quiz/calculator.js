"use strict";
/**
 * Let's make a calculator 🧮
 */
var obj = {
    add: function (num1, num2) { return num1 + num2; },
    substract: function (num1, num2) { return num1 - num2; },
    multiply: function (num1, num2) { return num1 * num2; },
    divide: function (num1, num2) { return num1 / num2; },
    remainder: function (num1, num2) { return num1 % num2; }
};
var calculate = function (calc, num1, num2) {
    return obj[calc](num1, num2);
};
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
