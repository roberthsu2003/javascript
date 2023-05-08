
declare function require(name:string):any;
const process = require('process')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('請輸入您的姓名?', (name:string)=> {
    console.log(`${name}您好!`);
    readline.close();
});

