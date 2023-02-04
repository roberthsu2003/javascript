const prompt = require('prompt-sync')({sigint: true});
let n = prompt('請輸入被除數(整數):');
let m = prompt('請輸入除數(整數,不可以為0):');

console.log(`商:${parseInt(n/m)},餘數:${n%m}`)