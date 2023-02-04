const prompt = require('prompt-sync')({sigint: true});
let sum = 0;
let x = parseFloat(prompt('請輸入第1個數:'))
sum += x;

x = parseFloat(prompt('請輸入第2個數:'))
sum += x;

x = parseFloat(prompt('請輸入第3個數:'))
sum += x;

console.log(`三個數的總和為:${sum}`)