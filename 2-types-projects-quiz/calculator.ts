/**
 * Let's make a calculator 🧮
 */

interface Iobj{
    [key: string] : (num1: number, num2: number) => number;
    add : (num1: number, num2: number) => number;
    substract: (num1:number, num2: number) => number;
    multiply: (num1:number, num2:number) => number;
    divide: (num1:number, num2:number) => number;
    remainder: (num1:number, num2:number) => number;
}

interface Icalc{
    (calc: string, num1: number, num2: number) : number;
}

const obj: Iobj = {
    add : (num1, num2) => num1 + num2,
    substract : (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,
    remainder: (num1, num2) => num1 % num2
}

const calculate: Icalc = (calc, num1,num2) => {
    return obj[calc](num1,num2);
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1