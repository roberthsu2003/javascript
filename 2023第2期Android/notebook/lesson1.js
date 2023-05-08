
//npm install prompt-sync
const prompt = require('prompt-sync')({sigint: true});
let name = prompt("請輸入您的姓名?")
console.log("您好:"+ name)