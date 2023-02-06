//小明想要存錢買一輛機車,機車每輛30000元，他將每月存的錢輸入，當存款足夠買機車時，就顯示提示訊息告知。
prompt = require('prompt-sync')({sigint:true})

let deposit = 0
let num = 0
while(deposit < 30000){
    num += 1
    inputNum = parseInt(prompt('請輸入第'+num+"個月份的存款:"))
    deposit += inputNum
}
console.log(`恭喜!已經存夠了，存了${num}個月的總存款為:${deposit}元。`)