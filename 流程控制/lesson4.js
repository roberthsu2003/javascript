const prompt = require('prompt-sync')({sigint:true})
chinese = parseInt(prompt('請輸入國文分數:'))
math = parseInt(prompt('請輸入數學分數:'))

if (chinese == 100 && math == 100)
    console.log("獎金1000元")
else if (chinese == 100 || math == 100)
    console.log("獎金500元")
else
    console.log("沒有獎金")