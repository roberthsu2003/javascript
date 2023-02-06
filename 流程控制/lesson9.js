//請設計一個程式，讓使用者輸入數值，只有加總正偶數值，不加總正奇數值，如果輸入負數，結束程式。
const prompt = require('prompt-sync')({sigint:true})
let num = 0
let sum = 0
while(true){
    num += 1    
    let inputNum = parseInt(prompt("請輸入第"+ num + "個數值:"))
    if(inputNum < 0)
        break
    else if (inputNum % 2 == 1)
        continue
    else
        sum += inputNum
}
console.log(`所有輸入的正偶數的加總是:${sum}`)