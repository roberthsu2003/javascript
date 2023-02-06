//計算固定中的支出，媽媽每天會將家裡的花費記錄下來，並且計算本週的花費總和
const prompt = require('prompt-sync')({sigint:true})
let sum=0
for(var i=1; i<=7; i++){
    if(i==7){
        var n = parseInt(prompt("請輸入星期日的支出:"))   
    }else{        
        var n = parseInt(prompt("請輸入星期" + i + " 的支出:"))
    }
    

    sum += n;
}

console.log("本星期的支出為:" + sum + "元")