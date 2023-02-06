prompt = require('prompt-sync')({sigint:true});
let sum = 0;
let i = 1;
while(true){
    if(i==7){
        var n = parseInt(prompt('請輸入星期日的支出:'))
        break
    }
    else{
        let output = "請輸入星期" + i + "的支出:"
        var n = parseInt(prompt(output))
    }
    sum += n
    i += 1
}
    
console.log(`本星期的支出為:${sum}元`)