//小美是一位教師，請你以while迴圈方式為小美設計一個輸入成績的程式，如果輸入負數表示成績輸入結束，在輸入成績結束後顯示班上總成績及平均成績
const prompt = require('prompt-sync')({sigint:true})

let num = 0
let sum = 0
while(true){
    
    let score = parseInt(prompt('請輸入第'+ (num+1) +'學生的成績:'))    
    if(score < 0)
        break    
    num += 1
    sum += score
}   
//已經跳出while    
console.log(`全班總成績為:${sum}, 平均分數為:${(sum/num).toFixed(2)}`)