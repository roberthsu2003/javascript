const prompt = require('prompt-sync')({sigint:true})
let scores = parseInt(prompt("請輸入學生分數:"))
if (scores>=60){
    console.log("及格")
}else{
    console.log("不及格")
}