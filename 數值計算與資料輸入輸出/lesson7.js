const prompt = require('prompt-sync')({sigint: true});
let money = 50000;
let cell = prompt('請輸入手機金額:');
money -= parseInt(cell);
console.log(`剩餘款為:${money}`)
