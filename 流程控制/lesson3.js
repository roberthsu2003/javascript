const prompt = require('prompt-sync')({sigint:true})
let x = parseInt(prompt('請輸入x:'))
let y = parseInt(prompt('請輸入y:'))

if (x >= 0)
    root = x ** (1 / y)
else{
    if (x % 2 == 0)
        root = "虛數"
    else
        root = (-(-x)) ** (1 / y)
}
console.log(`root=${root}`)