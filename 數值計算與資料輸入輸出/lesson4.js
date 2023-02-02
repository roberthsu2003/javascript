const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('請輸入您的姓名?', name => {
    console.log(`${name}您好!`);
    readline.close();
});